import React, { useState, useEffect } from "react";


function InputField({
    Type,
    Name,
    InputId,
    Label,
    InputPlaceholder,
}) {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);

    useEffect(() => {
        // handle autofill or pre-filled value
        const input = document.getElementById(InputId);
        if (input && input.value) {
            setHasValue(true);
        }
    }, [InputId]);

    return (
        <div className="floating-label-input">
            <input
                type={Type}
                name={Name}
                id={InputId}
                placeholder={isFocused ? InputPlaceholder : ""}
                className="form-input"
                onFocus={() => setIsFocused(true)}
                onBlur={(e) => {
                    setIsFocused(false);
                    setHasValue(e.target.value !== "");
                }}
                onChange={(e) => setHasValue(e.target.value !== "")}
            />
            <label htmlFor={InputId} className={isFocused || hasValue ? "label-float" : ""}>
                {Label} <span className="required-star">*</span>
            </label>
        </div>
    );
}

export default InputField;
