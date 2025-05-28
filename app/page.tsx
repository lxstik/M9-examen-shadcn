import Image from "next/image";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="w-full max-w-[1200px] text-center mx-auto mt-10 px-4">
      <div className="headerText mt-24 sm:mt-40">
        <h1 className="text-4xl sm:text-6xl font-bold text-center mb-6" style={{ marginBottom: "25px" }}>
          Information you need during <br className="hidden sm:block" />on-call emergencies
        </h1>

        <p className="text-base sm:text-lg mb-8" style={{ marginBottom: "60px" }}>
          Quickly link new on-call tickets to similar past incidents and their solutions. All <br className="hidden sm:block" />directly in Slack the moment an incident happens.
        </p>

        <Button
          variant="outline"
          className="text-black mb-10 sm:mb-[60px]"
        >
          <a href="#">Get started &gt;</a>
        </Button>
      </div>

      <div className="imageContainer flex justify-center">
        <Image
          src="/perfil.png"
          alt="profile pic"
          width={1000}
          height={800}
          className="w-full h-auto"
          priority
        />
      </div>

      <div className="solutions">
        <h1 className="text-4xl sm:text-6xl font-bold text-center mb-6" style={{ marginTop: "80px", marginBottom: "40px" }}>
          Quick solutions, less stress
        </h1>
        <div className="flex flex-col sm:flex-row justify-center gap-10 sm:gap-16 mt-10 sm:mt-20">
          <div className="flex flex-col items-start w-full sm:w-[260px] mb-8 sm:mb-0">
            <div className="mb-4">
              <svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="1.03516" width="55" height="55" rx="5.5" fill="#09090B" />
                <rect x="0.5" y="1.03516" width="55" height="55" rx="5.5" stroke="#27272A" />
                <path d="M26 18.5352H30" stroke="#D9D9D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M28 30.5352L31 27.5352" stroke="#D9D9D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M28 38.5352C32.4183 38.5352 36 34.9534 36 30.5352C36 26.1169 32.4183 22.5352 28 22.5352C23.5817 22.5352 20 26.1169 20 30.5352C20 34.9534 23.5817 38.5352 28 38.5352Z" stroke="#D9D9D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mb-2 text-left">Fix emergencies fast</h2>
            <p className="text-sm sm:text-base text-neutral-300 text-left">
              Save 20-30 minutes per on-call ticket - no more searching for relevant issues and runbooks
            </p>
          </div>
          <div className="flex flex-col items-start w-full sm:w-[260px] mb-8 sm:mb-0">
            <div className="mb-4">
              <svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="1.03516" width="55" height="55" rx="5.5" fill="#09090B" />
                <rect x="0.5" y="1.03516" width="55" height="55" rx="5.5" stroke="#27272A" />
                <path d="M37 32.5352L33 36.5352L29 32.5352" stroke="#D9D9D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M33 36.5352V20.5352" stroke="#D9D9D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M19 24.5352L23 20.5352L27 24.5352" stroke="#D9D9D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M23 20.5352V36.5352" stroke="#D9D9D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mb-2 text-left">Universally compatible</h2>
            <p className="text-sm sm:text-base text-neutral-300 text-left">
              Works with PagerDuty, Jira, or custom Slack alerts—Pandem integrates with any system
            </p>
          </div>
          <div className="flex flex-col items-start w-full sm:w-[260px]">
            <div className="mb-4">
              <svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="1.03516" width="55" height="55" rx="5.5" fill="#09090B" />
                <rect x="0.5" y="1.03516" width="55" height="55" rx="5.5" stroke="#27272A" />
                <path d="M25 19.5352H21C19.8954 19.5352 19 20.4306 19 21.5352V25.5352C19 26.6397 19.8954 27.5352 21 27.5352H25C26.1046 27.5352 27 26.6397 27 25.5352V21.5352C27 20.4306 26.1046 19.5352 25 19.5352Z" stroke="#D9D9D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M23 27.5352V31.5352C23 32.0656 23.2107 32.5743 23.5858 32.9494C23.9609 33.3244 24.4696 33.5352 25 33.5352H29" stroke="#D9D9D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M35 29.5352H31C29.8954 29.5352 29 30.4306 29 31.5352V35.5352C29 36.6397 29.8954 37.5352 31 37.5352H35C36.1046 37.5352 37 36.6397 37 35.5352V31.5352C37 30.4306 36.1046 29.5352 35 29.5352Z" stroke="#D9D9D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mb-2 text-left">Secure for your org</h2>
            <p className="text-sm sm:text-base text-neutral-300 text-left">
              We keep your data safe by taking top security measures.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-32 sm:mt-[200px]">
        <h1 className="text-4xl sm:text-6xl font-bold text-center mb-6" style={{ marginBottom: "25px" }}>
          Instant setup, no custom<br className="hidden sm:block" /> code
        </h1>

        <p className="text-base sm:text-lg mb-8" style={{ marginBottom: "25px" }}>
          Invite the bot, pick a channel, and you're set-no custom code needed, and no <br className="hidden sm:block" /> vendor lock-in.
        </p>
      </div>

      <div className="imageContainer flex justify-center mb-32 sm:mb-[200px]">
        <Image
          src="/perfil.png"
          alt="profile pic"
          width={800}
          height={300}
          className="w-full max-w-[600px] h-auto"
        />
      </div>

      <div>
        <h1 className="text-4xl sm:text-6xl font-bold text-center mb-6" style={{ marginBottom: "25px" }}>
          Get in touch
        </h1>
        <p className="text-base sm:text-lg mb-8" style={{ marginBottom: "25px" }}>
          Request a demo, or hop on call.
        </p>
        <Button
          variant="outline"
          className="text-black mb-32 sm:mb-[200px]"
        >
          <a href="#">Get started &gt;</a>
        </Button>
      </div>
    </div>
  );
}