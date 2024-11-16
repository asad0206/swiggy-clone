import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface Radio02Props {
    options: { value: string; label: string }[];
    defaultValue: string;
    onChange: (value: string) => void;
}

export default function Radio02({ options, defaultValue, onChange }: Radio02Props) {
    const [value, setValue] = useState(defaultValue);

    const handleChange = (newValue: string) => {
        setValue(newValue);
        onChange(newValue);
    };

    return (
        <RadioGroup
            value={value}
            onValueChange={handleChange}
            style={{
                "--primary": "238.7 83.5% 66.7%",
                "--ring": "238.7 83.5% 66.7%",
            } as React.CSSProperties}>
            {options.map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label htmlFor={option.value}>{option.label}</Label>
                </div>
            ))}
        </RadioGroup>
    );
}



