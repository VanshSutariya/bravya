'use client';

import * as React from 'react';
import { Loader2 } from 'lucide-react';
import { useFormState, useFormStatus } from 'react-dom';

import { submitContactForm, type ContactActionState } from '@/app/contact/actions';
import { Button } from '@/components/ui/button';

const initialState: ContactActionState = {
  status: 'idle',
  message: undefined,
  errors: {},
};

export function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState);

  return (
    <form action={formAction} className="space-y-6" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField name="name" label="Name" required error={state.errors?.name} />
        <FormField name="email" label="Email" type="email" required error={state.errors?.email} />
      </div>
      <FormField name="company" label="Company" />
      <div className="grid gap-4 sm:grid-cols-2">
        <FormSelect
          name="budget"
          label="Budget range"
          required
          options={['$25k - $50k', '$50k - $100k', '$100k+', 'Not sure yet']}
          error={state.errors?.budget}
        />
        <FormSelect
          name="timeline"
          label="Timeline"
          required
          options={['< 1 month', '1 - 3 months', '3 - 6 months', 'Flexible']}
          error={state.errors?.timeline}
        />
      </div>
      <FormTextarea
        name="summary"
        label="Project summary"
        required
        rows={5}
        error={state.errors?.summary}
      />
      <div>
        <label htmlFor="attachment" className="block text-sm font-medium text-slate-700 dark:text-slate-200">
          Brief or supporting doc (optional)
        </label>
        <input
          id="attachment"
          name="attachment"
          type="file"
          className="mt-2 block w-full cursor-pointer rounded-xl border border-dashed border-slate-300 bg-transparent p-3 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand dark:border-slate-700"
        />
        {state.errors?.attachment && (
          <p className="mt-2 text-sm text-rose-500">{state.errors.attachment}</p>
        )}
      </div>

      <SubmitButton />

      {state.message && (
        <p
          className={`text-sm ${state.status === 'success' ? 'text-emerald-600' : 'text-rose-500'}`}
          role={state.status === 'success' ? 'status' : 'alert'}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
        <span className="flex items-center gap-2">
          <Loader2 className="h-4 w-4 animate-spin" /> Sending
        </span>
      ) : (
        'Send message'
      )}
    </Button>
  );
}

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

function FormField({ label, name, error, required, ...props }: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-slate-700 dark:text-slate-200"
      >
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        required={required}
        className="mt-2 block w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900 shadow-sm transition focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
        {...props}
      />
      {error && (
        <p id={`${name}-error`} className="mt-2 text-sm text-rose-500">
          {error}
        </p>
      )}
    </div>
  );
}

interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: string[];
  error?: string;
}

function FormSelect({ label, name, options, error, required, ...props }: FormSelectProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-slate-700 dark:text-slate-200"
      >
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className="mt-2 block w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900 shadow-sm transition focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
        {...props}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && (
        <p id={`${name}-error`} className="mt-2 text-sm text-rose-500">
          {error}
        </p>
      )}
    </div>
  );
}

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

function FormTextarea({ label, name, error, required, ...props }: FormTextareaProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-slate-700 dark:text-slate-200"
      >
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className="mt-2 block w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900 shadow-sm transition focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
        {...props}
      />
      {error && (
        <p id={`${name}-error`} className="mt-2 text-sm text-rose-500">
          {error}
        </p>
      )}
    </div>
  );
}
