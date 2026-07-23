import { Search } from "lucide-react";
import FormSelect from "../Leaddiscover/Formselect";

export default function LeadSearchBar() {
  return (
    <div className="rounded-xl border border-purple-500/30 bg-white/[0.03] p-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:items-end">
        <div className="lg:col-span-2">
          <label className="mb-2 block text-xs font-medium text-gray-400">
            Search Keyword
          </label>
          <div className="relative">
            <input
              type="text"
              defaultValue="Marketing Agency"
              className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 pr-11 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-purple-500/50"
            />
            <Search className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        <FormSelect
          label="Industry"
          options={["SaaS", "E-commerce", "Healthcare", "Finance", "Marketing Agency"]}
        />

        <FormSelect
          label="Country"
          options={["Pakistan", "United States", "United Kingdom", "Canada"]}
        />

        <FormSelect
          label="Employees"
          options={["10 - 50", "1 - 10", "50 - 200", "200+"]}
        />
      </div>

      <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-purple-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-purple-500 sm:w-auto">
        <Search className="h-4 w-4" />
        Search Leads
      </button>
    </div>
  );
}