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
import { Input } from "@/components/ui/input";

const MedicalInput = ({ control, name1, name2, question }) => (
  <div className="p-4 border-2 border-black-300 rounded-md grid grid-cols-1 gap-2 ">
    <FormField
      className="col-span-2"
      control={control}
      name={name1}
      render={({ field }) => (
        <FormItem className="flex flex-row space-x-2 justify-between align-bottom">
          <div className="">
            <FormLabel>{question}</FormLabel>
          </div>
          <div className="w-16">
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem key="Yes" value="Yes">
                  Yes
                </SelectItem>
                <SelectItem key="No" value="No">
                  No
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </FormItem>
      )}
    />

    <FormField
      className="col-span-1"
      control={control}
      name={name2}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input placeholder="If yes, please provide details" {...field} />
          </FormControl>
        </FormItem>
      )}
    />
  </div>
);

export default MedicalInput;
