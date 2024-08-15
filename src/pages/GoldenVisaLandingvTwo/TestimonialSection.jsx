import { Button } from "../../components/Button";
import { Img } from "../../components/Img";
import { Text } from "../../components/Text";
import { Heading } from "../../components/Heading";

export default function TestimonialSection() {
  return (
    <>
      {/* testimonial section */}
      <div className="mt-40 flex flex-col items-center relative">
        <div className="max-w-screen-xl mx-auto px-4 w-full ">
          <div className="flex flex-col items-center gap-6">
            <Button color="dark_0" size="xs" className="uppercase">
              Hear from Our Winners!
            </Button>
            <h1 className="text-shadow-ts text-3xl md:text-5xl text-center">
              Learn how participants have transformed their lives with
              <br className="hidden md:block" />
              the GenZ Talent Program
            </h1>
            <p className="text-2xl text-dark-0 text-center">
              Be inspired by the stories of those who have already transformed
              their lives through the GenZ Talent Program.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-start my-4 w-full gap-3">
            <div className="flex flex-col gap-5 w-full md:w-2/5 md:mt-20">
              <p className="w-full text-base md:text-3xl">
                “Winning the UAE Golden Visa through the GenZ Talent Program has
                opened doors I never imagined possible. The opportunities here
                are endless.”
              </p>
              <div className="flex flex-col items-start gap-1">
                <Heading
                  size="headingxs"
                  as="h2"
                  className="!text-accent-black"
                >
                  Jack Doe
                </Heading>
                <Text size="textxs" as="p" className="!text-dark-3">
                  Entrepreneur at CompanyName
                </Text>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-3 w-full md:w-3/5">
              <div className="w-full md:w-1/2">
                {" "}
                <Img
                  src="images/img_rectangle_33.png"
                  alt="Story Image"
                  className="rounded-[20px] h-[482px] w-full"
                />
              </div>
              <div className="flex flex-col gap-3 w-full md:w-1/2">
                <Img
                  src="images/img_rectangle_34.png"
                  alt="Next Image"
                  className="h-[482px] rounded-[20px] object-cover"
                />
                <Button
                  variant="fill"
                  shape="round"
                  rightIcon={
                    <div className="flex h-[36px] w-[36px] items-center justify-center rounded-[50%] bg-dark-0">
                      <Img
                        src="images/img_arrowright_white_0.svg"
                        alt="Arrow Right"
                        className="h-[12px] w-[14px]"
                      />
                    </div>
                  }
                  className=" gap-10 self-stretch border border-solid border-dark-0 capitalize"
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
