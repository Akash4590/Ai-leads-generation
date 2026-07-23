import {
  FileText,
  User,
  Globe,
  Briefcase,
  MapPin,
  Users,
  Target,
  TrendingUp,
  Sparkles,
  Globe2,
  Search,
  Mail,
  Kanban,
  ArrowRight,
} from "lucide-react";

import FormInput from "../Createproject/Forminput";
import FormSelect from "../Createproject/Formselect";
import AIModuleCard from "../Createproject/Aimodulecard";


const aiModules = [
  {
    icon: Globe2,
    title: "Website Audit",
    description: "Analyze website SEO, performance & security",
  },
  {
    icon: Search,
    title: "Lead Discovery",
    description: "Find qualified leads from multiple sources",
  },
  {
    icon: Mail,
    title: "AI Email Writer",
    description: "Generate personalized emails with AI",
  },
  {
    icon: Kanban,
    title: "CRM Pipeline",
    description: "Manage leads and track deals in pipeline",
  },
];


export default function ProjectInformationForm() {
  return (
    <div
      className="
      group
      relative
      overflow-hidden
      flex
      flex-col
      rounded-2xl
      border
      border-white/10
      bg-white/[0.03]
      p-8
      backdrop-blur-xl
      transition-all
      duration-500
      hover:border-purple-400/40
      "
    >

      {/* Glow */}
      <div
        className="
        pointer-events-none
        absolute
        -top-20
        -right-20
        h-72
        w-72
        rounded-full
        bg-purple-600/30
        blur-[120px]
        "
      />


      <div
        className="
        pointer-events-none
        absolute
        bottom-0
        left-1/2
        h-48
        w-80
        -translate-x-1/2
        rounded-full
        bg-blue-500/20
        blur-[100px]
        "
      />


      <div className="relative z-10">


        {/* Header */}
        <h3
          className="
          flex
          cursor-pointer
          items-center
          gap-2.5
          text-lg
          font-semibold
          text-white
          "
        >

          <FileText
            className="
            h-5
            w-5
            cursor-pointer
            text-purple-400
            transition-transform
            duration-300
            hover:scale-125
            "
          />

          Project Information

        </h3>



        <div className="mt-6 flex flex-col gap-5">



          {/* Input */}
          <div
            className="
            cursor-pointer
            rounded-xl
            transition-all
            duration-300
            hover:-translate-y-1
            "
          >

            <FormInput
              icon={User}
              label="Project Name"
              defaultValue="GrowRise"
            />

          </div>



          <div
            className="
            cursor-pointer
            rounded-xl
            transition-all
            duration-300
            hover:-translate-y-1
            "
          >

            <FormInput
              icon={Globe}
              label="Business Website"
              defaultValue="https://growrise.ai"
              verified
            />

          </div>




          {/* Select Row */}

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">


            <div
              className="
              cursor-pointer
              rounded-xl
              transition-all
              duration-300
              hover:-translate-y-1
              "
            >

              <FormSelect
                icon={Briefcase}
                label="Industry"
                options={[
                  "Marketing Agency",
                  "E-commerce",
                  "SaaS",
                  "Healthcare",
                  "Finance",
                ]}
              />

            </div>



            <div
              className="
              cursor-pointer
              rounded-xl
              transition-all
              duration-300
              hover:-translate-y-1
              "
            >

              <FormSelect
                icon={MapPin}
                label="Country"
                options={[
                  "United States",
                  "United Kingdom",
                  "Canada",
                  "Australia",
                  "Pakistan",
                ]}
              />

            </div>


          </div>




          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">


            <div
              className="
              cursor-pointer
              rounded-xl
              transition-all
              duration-300
              hover:-translate-y-1
              "
            >

              <FormSelect
                icon={Users}
                label="Company Size"
                options={[
                  "1-10 Employees",
                  "10-50 Employees",
                  "50-200 Employees",
                  "200+ Employees",
                ]}
              />

            </div>




            <div
              className="
              cursor-pointer
              rounded-xl
              transition-all
              duration-300
              hover:-translate-y-1
              "
            >

              <FormInput
                icon={Target}
                label="Target Audience"
                defaultValue="Marketing Agencies"
              />

            </div>


          </div>




          <div
            className="
            cursor-pointer
            rounded-xl
            transition-all
            duration-300
            hover:-translate-y-1
            "
          >

            <FormInput
              icon={TrendingUp}
              label="Monthly Lead Goal"
              defaultValue="1000"
              suffix="Leads/Month"
            />

          </div>





          {/* AI Modules */}

          <div>

            <p
              className="
              flex
              cursor-pointer
              items-center
              gap-2
              text-sm
              font-semibold
              text-white
              "
            >

              <Sparkles
                className="
                h-4
                w-4
                cursor-pointer
                text-purple-400
                "
              />

              AI Modules

            </p>


            <p className="mt-1 text-xs text-gray-400">
              Choose the AI features you want to enable for this project.
            </p>



            <div
              className="
              mt-4
              grid
              grid-cols-1
              gap-3
              sm:grid-cols-2
              lg:grid-cols-4
              "
            >

              {
                aiModules.map((module)=>(
                  
                  <div
                    key={module.title}
                    className="
                    cursor-pointer
                    rounded-xl
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:scale-[1.03]
                    "
                  >

                    <AIModuleCard {...module}/>

                  </div>

                ))
              }


            </div>


          </div>


        </div>




        {/* Buttons */}

        <div
          className="
          mt-8
          flex
          flex-col-reverse
          gap-3
          border-t
          border-white/10
          pt-6
          sm:flex-row
          sm:justify-between
          "
        >


          <button
            className="
            cursor-pointer
            rounded-lg
            border
            border-white/15
            px-6
            py-3
            text-sm
            font-medium
            text-white
            transition-all
            hover:bg-white/10
            "
          >
            Cancel
          </button>



          <button
            className="
            flex
            cursor-pointer
            items-center
            justify-center
            gap-2
            rounded-lg
            bg-purple-600
            px-6
            py-3
            text-sm
            font-medium
            text-white
            shadow-[0_0_24px_rgba(147,51,234,0.4)]
            transition-all
            duration-300
            hover:scale-105
            hover:bg-purple-500
            "
          >

            Create Project

            <ArrowRight className="h-4 w-4"/>

          </button>


        </div>


      </div>


    </div>
  );
}