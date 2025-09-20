# CURSOR.md - Design System & Styling Guide

## 🎨 Design System Overview

This document contains the styling patterns, design tokens, and UI guidelines used throughout the SocialApp project. Use this as a reference for maintaining consistency across all components.

## 🎯 Color Palette

### Primary Colors
- **Blue Gradient**: `from-blue-50 to-indigo-100` (Background)
- **Primary Blue**: `from-blue-500 to-indigo-600` (Buttons, Links)
- **Hover Blue**: `from-blue-600 to-indigo-700` (Button Hover)
- **Text Blue**: `from-blue-600 to-indigo-600` (Gradient Text)

### Neutral Colors
- **White**: `bg-white/80` (Card Background)
- **Gray Text**: `text-gray-600` (Secondary Text)
- **Light Gray**: `text-gray-500` (Footer Text)
- **Border**: `border-white/50` (Card Borders)

## 🏗️ Layout Patterns

### Full-Screen Centered Layout
```jsx
<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
  <div className="max-w-xl w-full bg-white/80 backdrop-blur-sm py-8 px-8 shadow-2xl rounded-2xl border border-white/50">
    {/* Content */}
  </div>
</div>
```

### Form Container
- **Max Width**: `max-w-xl` (for forms)
- **Padding**: `py-8 px-8`
- **Background**: `bg-white/80 backdrop-blur-sm`
- **Shadow**: `shadow-2xl`
- **Border Radius**: `rounded-2xl`
- **Border**: `border border-white/50`

## 📝 Typography

### Headers
```jsx
<h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
  Page Title
</h1>
```

### Subtitles
```jsx
<p className="text-gray-600 mt-2">Descriptive subtitle text</p>
```

### Links
```jsx
<span className="text-blue-600 hover:text-blue-700 cursor-pointer font-medium">
  Link Text
</span>
```

## 🎛️ Form Components

### Input Fields
```jsx
<Input
  isRequired
  type="text"
  label="Field Label"
  variant="faded"
  radius="lg"
  classNames={{
    input: "text-sm",
    inputWrapper: "shadow-sm hover:shadow-md transition-shadow"
  }}
  {...register("fieldName")}
  isInvalid={Boolean(errors?.fieldName?.message)}
  errorMessage={errors.fieldName?.message}
/>
```

### Select Dropdowns
```jsx
<Select
  isRequired
  label="Select Label"
  variant="faded"
  radius="lg"
  placeholder="Choose an option"
  classNames={{
    trigger: "shadow-sm hover:shadow-md transition-shadow"
  }}
  {...register("fieldName")}
  isInvalid={Boolean(errors?.fieldName?.message)}
  errorMessage={errors.fieldName?.message}
>
  <SelectItem key="option1">Option 1</SelectItem>
  <SelectItem key="option2">Option 2</SelectItem>
</Select>
```

### Buttons
```jsx
<Button 
  type="submit" 
  color="primary" 
  variant="shadow"
  size="lg"
  radius="lg"
  className="mt-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 font-semibold transition-all duration-300 transform hover:scale-105"
>
  Button Text
</Button>
```

## 🎭 Animation & Effects

### Hover Effects
- **Scale Transform**: `hover:scale-105` (Buttons)
- **Shadow Transition**: `hover:shadow-md` (Inputs)
- **Color Transition**: `hover:from-blue-600 hover:to-indigo-700` (Buttons)

### Transitions
- **Duration**: `transition-all duration-300`
- **Shadow**: `transition-shadow`
- **Transform**: `transform`

## 📱 Responsive Design

### Container Sizes
- **Small Forms**: `max-w-md`
- **Medium Forms**: `max-w-xl`
- **Large Content**: `max-w-2xl`

### Spacing
- **Form Gap**: `gap-5` (between form elements)
- **Section Margin**: `mb-8` (between sections)
- **Button Margin**: `mt-4` (top margin for buttons)

## 🎨 Glass Morphism Effects

### Backdrop Blur
```jsx
className="bg-white/80 backdrop-blur-sm"
```

### Semi-Transparent Borders
```jsx
className="border border-white/50"
```

## 📋 Component Patterns

### Page Header
```jsx
<div className="text-center mb-8">
  <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
    Page Title
  </h1>
  <p className="text-gray-600 mt-2">Page description</p>
</div>
```

### Form Footer
```jsx
<div className="text-center mt-6">
  <p className="text-sm text-gray-500">
    Footer text{" "}
    <span className="text-blue-600 hover:text-blue-700 cursor-pointer font-medium">
      Action Link
    </span>
  </p>
</div>
```

## 🔧 Form Validation Styling

### Error States
```jsx
isInvalid={Boolean(errors?.fieldName?.message)}
errorMessage={errors.fieldName?.message}
```

### Required Fields
```jsx
isRequired
```

## 📐 Spacing System

### Vertical Spacing
- **Small**: `gap-4`, `mt-2`, `mb-4`
- **Medium**: `gap-5`, `mt-4`, `mb-6`
- **Large**: `gap-6`, `mt-6`, `mb-8`

### Horizontal Spacing
- **Container Padding**: `px-8`
- **Screen Padding**: `p-4`

## 🎯 Best Practices

1. **Consistency**: Always use the same color palette and spacing
2. **Accessibility**: Include proper labels and error states
3. **Responsive**: Test on different screen sizes
4. **Hover States**: Add interactive feedback for better UX
5. **Loading States**: Consider adding loading indicators for async operations

## 🚀 Quick Reference

### Common Class Combinations
- **Card Container**: `bg-white/80 backdrop-blur-sm shadow-2xl rounded-2xl border border-white/50`
- **Gradient Text**: `bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent`
- **Gradient Button**: `bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700`
- **Form Input**: `variant="faded" radius="lg"`

### Import Pattern
```jsx
import { Button, Input, Select, SelectItem } from "@heroui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
```

---

**Last Updated**: December 2024  
**Version**: 1.0  
**Maintained by**: Abdelfattah Elnaggar
