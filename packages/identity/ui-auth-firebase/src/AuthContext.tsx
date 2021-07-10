import * as React from "react";
import * as yup from "yup";
import {
  createUserWithEmailAndPassword,
  getAuth,
  User,
  UserCredential,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { AsyncStatus, useAsync } from "@lucid/util-react";
import {
  passwordConfirmationSchema,
  passwordSchema,
} from "@lucid/identity-ui-auth";
import type { ValidationError } from "yup";

interface AuthContextValue {
  user: User | null;
  error: string | null;
  status: AsyncStatus;
  signout: any;
  signupWithEmailAndPassword: (input: RegisterInput) => Promise<void>;
  signinWithEmailAndPassword: any;
}

const AuthContext = React.createContext<AuthContextValue | undefined>(
  undefined
);
AuthContext.displayName = "AuthContext";

const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("");
  }
  return context;
};

type RegisterInput = {
  email: string;
  password: string;
  passwordConfirmation: string;
};

const registerWithEmailAndPasswordSchema = yup.object().shape({
  email: yup.string().email().required().label("Email"),
  password: passwordSchema,
  passwordConfirmation: passwordConfirmationSchema("password"),
});

const useProvideAuth = (): AuthContextValue => {
  const {
    data: user,
    error,
    status,
    setData,
    setError,
    setIsLoading,
  } = useAsync<
    Exclude<AuthContextValue["user"], null>,
    Exclude<AuthContextValue["error"], null>
  >({ data: null, error: null });

  const setUser = React.useCallback(
    (user: User) => setData(formatUser(user)),
    [setData]
  );

  const handleUser = React.useCallback(
    (promise: Promise<UserCredential>): Promise<void> =>
      promise
        .then((userCredential) => {
          setUser(userCredential.user);
        })
        .catch((error) => {
          setError(error.message);
        }),
    [setError, setUser]
  );

  const signupWithEmailAndPassword = React.useCallback(
    async (input: RegisterInput) => {
      setIsLoading();
      const { email, password } = input;

      try {
        await registerWithEmailAndPasswordSchema.validate(input);
      } catch (err: unknown) {
        return Promise.reject((err as ValidationError).errors);
      }

      const auth = getAuth();
      return handleUser(createUserWithEmailAndPassword(auth, email, password));
    },
    [handleUser, setIsLoading]
  );

  const signout = React.useCallback(() => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setData(null);
      })
      .catch(() => {
        setError(null);
      });
  }, [setData, setError]);

  React.useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setData(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [setData, setUser]);

  return {
    user,
    error,
    status,
    signout,
    signupWithEmailAndPassword,
    signinWithEmailAndPassword: null,
  };
};

interface AuthProviderProps {
  children?: React.ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

const formatUser = async (user: User) => {
  const token = await user.getIdToken();

  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
    token,
  };
};

export { useAuth, AuthProvider };
