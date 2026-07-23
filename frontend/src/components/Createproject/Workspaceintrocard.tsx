import {
  Globe,
  Zap,
  BarChart3,
  Mail,
  DollarSign,
  CheckCircle2,
  Lock,
  Shield,
  ArrowRight,
} from "lucide-react";

const workflowIcons = [
  { icon: Globe, bg: "bg-blue-600" },
  { icon: Zap, bg: "bg-yellow-500" },
  { icon: BarChart3, bg: "bg-purple-600" },
  { icon: Mail, bg: "bg-pink-600" },
  { icon: DollarSign, bg: "bg-emerald-600" },
];

const checklist = [
  "AI Website Audit",
  "Smart Lead Discovery",
  "AI Email Generator",
  "CRM Pipeline",
  "Analytics Dashboard",
];

export default function WorkspaceIntroCard() {
  return (
    <div
      className="
        relative
        flex
        flex-col
        justify-between
        overflow-hidden
        rounded-2xl
        border
        border-purple-400/20
        bg-gradient-to-br
        from-white/[0.08]
        via-white/[0.03]
        to-purple-500/[0.05]
        p-8
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-purple-400/40
      "
    >

      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-24
          -top-24
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
          -right-20
          top-10
          h-64
          w-64
          rounded-full
          bg-blue-500/25
          blur-[110px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          h-52
          w-96
          -translate-x-1/2
          rounded-full
          bg-fuchsia-500/20
          blur-[100px]
        "
      />


      {/* Content */}
      <div className="relative z-10">

        <h2 className="text-2xl font-bold leading-snug text-white">
          Let&apos;s build your first
          <br />
          AI Workspace 🚀
        </h2>


        <p className="mt-4 text-sm leading-relaxed text-gray-400">
          Connect your business website and AI Leads will automatically audit
          your website, discover qualified leads and generate personalized
          outreach campaigns.
        </p>


        {/* Workflow Icons */}
        <div className="relative mt-10 flex flex-col items-center">

          <div className="flex items-center gap-2">

            {workflowIcons.map(({ icon: Icon, bg }, i) => (

              <div key={i} className="flex items-center">

                <div
                  className={`
                    z-10
                    flex
                    h-12
                    w-12
                    cursor-pointer
                    items-center
                    justify-center
                    rounded-xl
                    shadow-lg
                    transition-all
                    duration-300
                    hover:scale-110
                    hover:-translate-y-1
                    ${bg}
                  `}
                >
                  <Icon className="h-5 w-5 text-white" />
                </div>


                {i < workflowIcons.length - 1 && (

                  <span className="mx-1 flex items-center">

                    <span className="h-px w-3 border-t border-dashed border-gray-600" />

                    <ArrowRight className="h-3 w-3 text-gray-600" />

                  </span>

                )}

              </div>

            ))}

          </div>



          {/* Glow Illustration */}
          <div
            className="
              group
              relative
              mt-6
              h-20
              w-full
              max-w-xs
              cursor-pointer
            "
          >

            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-16
                w-full
                -translate-x-1/2
                -translate-y-1/2
                rounded-[100%]
                bg-purple-600/40
                blur-2xl
                transition-transform
                duration-500
                group-hover:scale-125
              "
            />


            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-8
                w-2/3
                -translate-x-1/2
                -translate-y-1/2
                rounded-[100%]
                bg-fuchsia-500/50
                blur-xl
                transition-transform
                duration-500
                group-hover:scale-125
              "
            />


            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-2
                w-1/3
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-white/70
                blur-md
              "
            />

          </div>

        </div>



        {/* Checklist */}
        <div className="mt-6 border-t border-white/10 pt-6">

          <ul className="flex flex-col gap-3">

            {checklist.map((item) => (

              <li
                key={item}
                className="
                  flex
                  cursor-pointer
                  items-center
                  gap-3
                  transition-all
                  duration-300
                  hover:translate-x-1
                "
              >

                <span
                  className="
                    flex
                    h-5
                    w-5
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-purple-600
                  "
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-white" />
                </span>


                <span className="text-sm text-gray-200">
                  {item}
                </span>


              </li>

            ))}

          </ul>

        </div>

      </div>



      {/* Security Card */}
      <div
        className="
          relative
          z-10
          mt-8
          flex
          cursor-pointer
          items-center
          gap-4
          rounded-xl
          border
          border-white/10
          bg-white/[0.03]
          p-4
          transition-all
          duration-300
          hover:border-purple-400/40
          hover:bg-white/[0.06]
        "
      >

        <span
          className="
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-purple-500/15
            text-purple-400
          "
        >
          <Lock className="h-5 w-5" />
        </span>



        <div className="flex-1">

          <p className="text-sm font-semibold text-white">
            Secure. Fast. AI Powered.
          </p>

          <p className="mt-0.5 text-xs text-gray-400">
            Your data is encrypted and protected with enterprise-grade
            security.
          </p>

        </div>


        <Shield
          className="
            h-8
            w-8
            shrink-0
            text-purple-400/60
            transition-transform
            duration-300
            hover:scale-110
          "
        />

      </div>


    </div>
  );
}