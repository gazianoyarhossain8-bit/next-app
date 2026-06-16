export default function Contact() {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center px-5">
  
        <h1 className="text-5xl font-bold mb-8">
          Contact Us
        </h1>
  
        <form className="w-full max-w-md flex flex-col gap-4">
  
          <input
            type="text"
            placeholder="Enter your name"
            className="border border-gray-300 p-4 rounded-lg"
          />
  
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 p-4 rounded-lg"
          />
  
          <textarea
            placeholder="Your message"
            className="border border-gray-300 p-4 rounded-lg h-40"
          />
  
          <button className="bg-blue-500 text-white py-4 rounded-lg text-lg font-bold hover:bg-blue-600 duration-300">
            Submit
          </button>
  
        </form>
      </div>
    );
  }