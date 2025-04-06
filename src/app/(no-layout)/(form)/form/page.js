import { FormCardComponent } from "@/app/(no-layout)/(form)/components/FormCardComponent";
import { FormComponent } from "@/app/(no-layout)/(form)/components/FormComponent";

export default function FormPage() {
  return (
    <section className="text-black h-screen font-bold px-32 flex items-center justify-center">
      <div className="min-h-[650px] flex justify-between">
        <FormCardComponent />
        <FormComponent />
      </div>
    </section>
  );
}
