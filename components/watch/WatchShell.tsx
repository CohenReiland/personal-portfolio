
type WatchShellProps = {
    children: React.ReactNode;
};

export default function WatchShell({ children }: WatchShellProps) {
    return (
        <div className="flex justify-center">
            <div className="relative w-72 h-72 rounded-full bg-black border-[10px] border-gray-800 shadow-2xl">
                <div className="absolute inset-2 rounded-full bg-gray-900 text-white overflow-hidden">
                    {children}
                </div>
            </div>
        </div >
    )
}