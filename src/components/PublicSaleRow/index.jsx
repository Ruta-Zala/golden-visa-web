import { Heading } from "../HeadingMint/index";

export default function PublicSaleRow({
  publicSaleText = "Public Sale",
  percentageText = "70%",
  color = "#0056B8",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center gap-3 p-3.5 bg-light_base flex-1 rounded-[28px]`}
    >
      <div className={`blue_700_01_blue_800_01_border h-[12px] w-[12px] rounded-md border-[7px] border-solid`} style={{borderColor: color}} />
      <div className="flex flex-1 flex-wrap items-center justify-between gap-5">
        <Heading size="visa_desktop_headers_h6" as="p">
          {publicSaleText}
        </Heading>
        <Heading size="visa_desktop_headers_h5" as="p">
          {percentageText}
        </Heading>
      </div>
    </div>
  );
}
