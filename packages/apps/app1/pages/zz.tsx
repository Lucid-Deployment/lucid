import * as React from "react";
import { useMutation } from "react-query";

const Zz = () => {
  const [data, setData] = React.useState<string>();

  const { mutate } = useMutation<
    string,
    any,
    { field1: string; field2: string }
  >(
    async (data) => {
      const res = await fetch(`/api/zz/${data.field2}`, {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const data1 = await res.json();
      return data1.pid;
    },
    {
      onSuccess(data) {
        setData(data);
      },
    }
  );

  return (
    <div>
      <form
        onSubmit={(e: any) => {
          e.preventDefault();

          mutate({
            field1: e.target.elements.field1.value,
            field2: e.target.elements.field2.value,
          });
        }}
      >
        <input
          type="hidden"
          name="field1"
          value="<img src='' onerror='alert(1)' />"
        />
        <input name="field2" />
        <button type="submit">Submit</button>
      </form>
      <span dangerouslySetInnerHTML={{ __html: data ?? "" }} />
    </div>
  );
};

export default Zz;
