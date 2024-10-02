import Image from "next/image";
// import ReactDatePicker from "react-datepicker";
import { Control } from "react-hook-form";
// import PhoneInput from "react-phone-number-input";

// import { Checkbox } from "./ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
// import { Select, SelectContent, SelectTrigger, SelectValue } from "./ui/select";
// import { Textarea } from "./ui/textarea";

interface CustomProps {
    control: Control<any>;
}

const CustomFormField = ({control }: CustomProps) => {
  return (
    <div>CustomFormField</div>
  )
}

export default CustomFormField