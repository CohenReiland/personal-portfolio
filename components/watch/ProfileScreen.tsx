
export default function ProfileScreen({ imageSrc }: { imageSrc: string }) {
    return (
        <>
            <img
                src={imageSrc}
                alt="Profile Photo"
                className="w-full h-full object-cover object-[50%_15%]"
            />
            <div className="absolute inset-0
                      bg-gradient-to-b
                      from-black/20 to-transparent
                      dark:from-black/10" />
        </>
    );
}