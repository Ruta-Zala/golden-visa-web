const FormField = ({ label, placeholder }) => (<>
    <div className="my-4">
        <label className="font-bold"> {label} </label>
        <input placeholder={placeholder} className="rounded-full px-6 py-5 bg-light_base mt-2" />
    </div>
</>)

export default function SignUpForm() {
    return (<div className="w-full">
        <div className="text-center">
            <h1 className="text-2xl font-bold"> Create an account </h1>
            <div className="text-dark-0/40 text-xl mt-1">Set up your account in just 2 minutes.</div>
        </div>
        <FormField label="Name" placeholder="Enter your name" />
        <FormField label="Email" placeholder="Enter your Email" />
        <FormField label="Password" placeholder="Create a password" />
        <div className="flex items-center gap-2">
            <input
                type="radio"
                className="h-6 w-6 border-dark-0 text-dark-0 focus:ring-dark-0 cursor-pointer rounded-full"
            />
            <label className="text-dark-0/40">I’m agreeing with Terms of use and Privacy policy</label>
        </div>
        <button class="font-medium capitalize flex items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-full text-lg bg-dark-0 text-white-0 w-full py-3 px-4 mt-5">
            <span className="flex-1 text-center pl-9 text-wrap">Create an account with my Email</span>
            <div class="flex h-9 w-9 items-center justify-center rounded-[50%] bg-white-0">
                <div className="flex justify-center items-center w-10 h-10 rounded-[50%] bg-white-0 text-dark-0 text-3xl transform -rotate-45">
                    →
                </div>
            </div>
        </button>
    </div>)
}