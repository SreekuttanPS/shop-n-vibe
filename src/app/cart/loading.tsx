export default function Loading() {
  return (
    <div className="animate-pulse">
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Cart</h2>
          <div className="bg-gray-50 flex flex-col items-center p-4 space-y-4">
            <div className="w-full max-w-4xl bg-gray-200 p-4 flex md:flex-row flex-col md:justify-between items-center gap-6 w-30 h-30"></div>
            <div className="w-full max-w-4xl bg-gray-200 p-4 flex md:flex-row flex-col md:justify-between items-center gap-6 w-30 h-30"></div>
            <div className="w-full max-w-4xl bg-gray-200 p-4 flex md:flex-row flex-col md:justify-between items-center gap-6 w-30 h-30"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
