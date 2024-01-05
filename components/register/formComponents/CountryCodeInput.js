"use client";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const items = [
  "United States (+1)",
  "United Kingdom (+44)",
  "Australia (+61)",
  "Germany (+49)",
  "France (+33)",
  "India (+91)",
  "Japan (+81)",
  "China (+86)",
  "Russia (+7)",
  "Brazil (+55)",
  "Spain (+34)",
  "Italy (+39)",
  "Mexico (+52)",
  "South Korea (+82)",
  "Canada (+1)",
  "Pakistan (+92)",
  "Indonesia (+62)",
  "Philippines (+63)",
  "Nigeria (+234)",
];

const CountryCodeInput = ({
  control,
  name,
  label,
  placeholder,
  description,
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {items.map((item, index) => (
                <SelectItem key={index} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CountryCodeInput;
