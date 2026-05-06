import { cn } from "@/lib/utils";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Controller, FieldPath, FieldValues, PathValue, UseControllerProps } from "react-hook-form";
import {
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";

export type FieldType = "text" | "password" | "email" | "number" | "textarea" | "select" | "date" | "datetime";


interface CommonInputProps<T extends FieldValues> {
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
    errors?: Record<string, { message?: string }>;
    validationRules?: UseControllerProps<T>["rules"];
    readOnly?: boolean;
    defaultValue?: PathValue<T, FieldPath<T>>;
    control: UseControllerProps<T>["control"];
    icon?: React.ReactNode;
    disabled?: boolean;
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
    errors = {},
    validationRules = {},
    readOnly = false,
    defaultValue,
    control,
    icon,
    disabled = false,
}: CommonInputProps<T>) => {

    // states
    const [showPassword, setShowPassword] = useState(false);
    const errorMessage = errors[register_as]?.message;

    // main render
    return (
        <View className={cn("w-full flex flex-col gap-2", wrapperClass)}>
            {label && (
                <Text className={cn("capitalize font-sf-pro-display-medium text-base", labelClass)}>
                    {label}
                </Text>
            )}

            <View
                className={cn(
                    "w-full flex-row items-center px-4 py-1 rounded-full  border border-primary-border focus-within:border-primary",
                    errorMessage && "border-red-500 focus-within:border-red-500",
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
                                    "flex-1 text-base text-black",
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
                            <View></View>
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

            {errorMessage && <Text className="text-red-500 text-sm font-semibold mt-1">{errorMessage}</Text>}
        </View>
    );
};

export default CommonInput;