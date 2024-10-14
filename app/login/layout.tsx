export default function LoginLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <main>
            <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">



                    <div className="flex gap-4 items-center flex-col sm:flex-row">
                        <div className="min-h-screen bg-gradient-to-b from-green-400 to-green-600 flex flex-col justify-between p-6 text-white">
                            <div className="flex justify-center items-center h-1/3">
                                {children}
                            </div>

                            {/* <Button disabled={false} title="Get Started" children={<ChevronRight size={24} />} /> */}
                        </div>
                    </div>
                </main>
                <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

                    <a
                        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                        href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >

                        Made With ❤️ by Prajna
                    </a>
                </footer>
            </div>

        </main>
    )
}