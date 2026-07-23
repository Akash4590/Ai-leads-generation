interface Step {
  number: number;
  label: string;
}

const steps: Step[] = [
  { number: 1, label: "Project Details" },
  { number: 2, label: "AI Configuration" },
  { number: 3, label: "Review & Create" },
];

interface StepperProps {
  currentStep: number;
}

export default function Stepper({ currentStep }: StepperProps) {
  return (
    <div className="flex flex-col items-end">
      <span className="mb-2 text-xs text-gray-400">
        Step {currentStep} of {steps.length}
      </span>
      <div className="flex items-center">
        {steps.map((step, i) => (
          <div key={step.number} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold ${
                  step.number === currentStep
                    ? "bg-purple-600 text-white shadow-[0_0_16px_rgba(168,85,247,0.6)]"
                    : step.number < currentStep
                    ? "bg-purple-600 text-white"
                    : "bg-white/10 text-gray-400"
                }`}
              >
                {step.number}
              </div>
              <span
                className={`mt-2 whitespace-nowrap text-xs ${
                  step.number === currentStep
                    ? "font-medium text-purple-400"
                    : "text-gray-500"
                }`}
              >
                {step.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                className={`mx-3 mb-5 h-px w-16 ${
                  step.number < currentStep ? "bg-purple-600" : "bg-white/10"
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}