import { cn } from "@/lib/utils"; // NativeWind support
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { Controller, FieldPath, FieldValues, PathValue, UseControllerProps } from "react-hook-form";
import {
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

type FieldType = "text" | "password" | "email" | "number" | "textarea" | "select" | "date" | "datetime";

interface Option {
    label: string;
    value: string | number;
}

interface CommonFieldsetProps<T extends FieldValues> {
    wrapperClass?: string;
    inputClass?: string;
    labelClass?: string;
    selectClass?: string;
    textareaClass?: string;
    innerWrapper?: string;
    label?: string;
    type?: FieldType;
    placeholder?: string;
    register_as: FieldPath<T>;
    options?: Option[];
    errors?: Record<string, { message?: string }>;
    validationRules?: UseControllerProps<T>["rules"];
    readOnly?: boolean;
    defaultValue?: PathValue<T, FieldPath<T>>;
    control: UseControllerProps<T>["control"];
    selectMode?: "single" | "multiple";
    icon?: React.ReactNode;
    disabled?: boolean;
    min?: string;
    max?: string;
}

const CommonInput = <T extends FieldValues>({
    wrapperClass,
    inputClass,
    labelClass,
    selectClass,
    textareaClass,
    innerWrapper,
    label = "",
    type = "text",
    placeholder = "",
    register_as,
    options = [],
    errors = {},
    validationRules = {},
    readOnly = false,
    defaultValue,
    control,
    selectMode = "single",
    icon,
    disabled = false,
    min,
    max,
}: CommonFieldsetProps<T>) => {
    const [showPassword, setShowPassword] = useState(false);
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [showDatePicker, setShowDatePicker] = useState(false);

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState<any>(null);
    const [items, setItems] = useState(options);

    const errorMessage = errors[register_as]?.message;

    return (
        <View className={cn("w-full flex flex-col gap-2", wrapperClass)}>
            {label && (
                <Text className={cn("capitalize font-medium text-base", labelClass)}>
                    {label}
                </Text>
            )}

            <View
                className={cn(
                    "w-full flex-row items-center px-4 py-4 rounded-2xl bg-white border border-gray-300 focus-within:border-primary",
                    innerWrapper
                )}
            >
                {icon && <View className="mr-2">{icon}</View>}

                {/* TEXTAREA */}
                {type === "textarea" ? (
                    <Controller
                        control={control}
                        name={register_as}
                        rules={validationRules}
                        defaultValue={defaultValue}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                value={value ?? ""}
                                onChangeText={onChange}
                                placeholder={placeholder}
                                editable={!disabled && !readOnly}
                                multiline
                                numberOfLines={4}
                                className={cn(
                                    "flex-1 text-base min-h-25 text-black",
                                    textareaClass
                                )}
                                style={{ textAlignVertical: "top" }}
                            />
                        )}
                    />
                ) : type === "select" ? (
                    /* SELECT */
                    <Controller
                        control={control}
                        name={register_as}
                        rules={validationRules}
                        defaultValue={defaultValue}
                        render={({ field: { onChange, value } }) => (
                            <View className={cn("flex-1", selectClass)}>
                                <DropDownPicker
                                    open={open}
                                    value={value ?? null}
                                    items={items}
                                    setOpen={setOpen}
                                    setValue={(val) => {
                                        setValue(val);
                                        onChange(val);
                                    }}
                                    setItems={setItems}
                                    placeholder={placeholder}
                                    disabled={disabled}
                                    multiple={selectMode === "multiple"}
                                    mode="BADGE"
                                    searchable
                                    style={{ borderWidth: 0 }}
                                />
                            </View>
                        )}
                    />
                ) : type === "date" || type === "datetime" ? (
                    /* DATE / DATETIME */
                    <Controller
                        control={control}
                        name={register_as}
                        rules={validationRules}
                        defaultValue={defaultValue}
                        render={({ field: { onChange, value } }) => (
                            <TouchableOpacity
                                className="flex-1"
                                onPress={() => !disabled && setShowDatePicker(true)}
                                disabled={disabled}
                            >
                                <Text className="text-base text-black py-1">
                                    {value
                                        ? new Date(value).toLocaleDateString()
                                        : placeholder || "Select date"}
                                </Text>

                                {showDatePicker && (
                                    <DateTimePicker
                                        value={value ? new Date(value) : new Date()}
                                        mode={type === "datetime" ? "datetime" : "date"}
                                        display="default"
                                        onChange={(event, selectedDate) => {
                                            setShowDatePicker(false);
                                            if (selectedDate) {
                                                onChange(selectedDate.toISOString().split("T")[0]);
                                            }
                                        }}
                                    />
                                )}
                            </TouchableOpacity>
                        )}
                    />
                ) : (
                    /* DEFAULT INPUT (text, password, email, number) */
                    <Controller
                        control={control}
                        name={register_as}
                        rules={validationRules}
                        defaultValue={defaultValue}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                value={value ?? ""}
                                onChangeText={onChange}
                                placeholder={placeholder}
                                secureTextEntry={type === "password" && !showPassword}
                                keyboardType={
                                    type === "email"
                                        ? "email-address"
                                        : type === "number"
                                            ? "numeric"
                                            : "default"
                                }
                                editable={!disabled && !readOnly}
                                className={cn(
                                    "flex-1 text-base text-black",
                                    inputClass
                                )}
                            />
                        )}
                    />
                )}

                {/* PASSWORD TOGGLE */}
                {type === "password" && (
                    <TouchableOpacity
                        onPress={() => setShowPassword(!showPassword)}
                        disabled={disabled}
                    >
                        <MaterialCommunityIcons
                            name={showPassword ? "eye-off" : "eye"}
                            size={24}
                            color="#666"
                        />
                    </TouchableOpacity>
                )}
            </View>

            {errorMessage && <Text className="text-red-500">{errorMessage}</Text>}
        </View>
    );
};

export default CommonInput;