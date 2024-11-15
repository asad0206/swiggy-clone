import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React from "react";

interface RadioOption {
    value: string;
    label: string;
}

interface Radio02Props {
    options: RadioOption[];
    defaultValue?: string;
}

export default function Radio02({ options, defaultValue = options[0]?.value }: Radio02Props) {
    return (
        <RadioGroup
            defaultValue={defaultValue}
            style={{
                "--primary": "238.7 83.5% 66.7%",
                "--ring": "238.7 83.5% 66.7%",
            } as React.CSSProperties}
        >
            {options.map((option) => (
                <div key={option.value} className="flex items-center gap-2">
                    <RadioGroupItem value={option.value} id={`radio-02-${option.value}`} />
                    <Label htmlFor={`radio-02-${option.value}`}>{option.label}</Label>
                </div>
            ))}
        </RadioGroup>
    );
}