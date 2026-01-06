
export default function GraduationScreen() {
    const graduationDate = new Date("2027-05-15");
    const today = new Date();

    const timeDiff = graduationDate.getTime() - today.getTime();
    const daysLeft = Math.max(0, Math.ceil(timeDiff / (1000 * 3600 * 24)));

    return (
        <div className="w-full h-full flex flex-col
                    items-center justify-center
                    text-center px-4">

            <span className="text-xs tracking-widest
                       text-neutral-500
                       dark:text-gray-400">
                DAYS UNTIL GRADUATION
            </span>
            <span className="text-[48px] font-semibold
                       text-neutral-900
                       dark:text-white leading-none">
                {daysLeft}!
            </span>
        </div>
    );
}