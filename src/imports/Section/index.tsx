function Paragraph() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[40px] top-[25px] w-[1063px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Barlow_Condensed:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#ac4e76] text-[12px] tracking-[3.6px] uppercase whitespace-nowrap">The Brief</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[123px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start justify-center p-[24px] relative size-full text-[#616d79]">
          <div className="font-['Mulish:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[16px] tracking-[-0.64px] uppercase whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
            <p className="leading-[1.2]">1</p>
          </div>
          <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Helvetica_Neue:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] whitespace-nowrap">A premium brand destination</p>
          <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Helvetica_Neue:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[11px] w-[392px]">Inspire desire, express the brand world, create a luxury experience</p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[123px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start justify-center p-[24px] relative size-full text-[#616d79]">
          <div className="font-['Mulish:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[16px] tracking-[-0.64px] uppercase w-[264px]" style={{ fontFeatureSettings: '"dlig"' }}>
            <p className="leading-[1.2]">2</p>
          </div>
          <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Helvetica_Neue:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] whitespace-nowrap">A high-performing e-commerce platform.</p>
          <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Helvetica_Neue:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[11px] w-[264px]">Support browsing, product discovery, loyalty, and checkout</p>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#343a3e] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start not-italic p-[32px] relative size-full">
        <p className="font-['Barlow_Condensed:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#fabdb9] text-[12px] tracking-[2.4px] uppercase w-full">My Core Challenge</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[16px] text-[rgba(238,229,212,0.8)] w-full">
          <span className="leading-[26px]">{`The challenge was not choosing between inspiration and conversion. It was designing an experience where both could `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[26px]">work together.</span>
        </p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[18px] items-start left-[58px] top-[178px] w-[925px]">
      <Frame />
      <Frame1 />
      <Container />
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-[#f7f3ea] border-[rgba(52,58,62,0.1)] border-b border-solid relative size-full" data-name="Section">
      <Paragraph />
      <p className="[word-break:break-word] absolute font-['Mulish:Bold',sans-serif] font-bold leading-[48px] left-[40px] text-[#1c1f23] text-[48px] top-[41px] uppercase whitespace-nowrap">The central task</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.5px] left-[48px] not-italic text-[16px] text-[rgba(52,58,62,0.8)] top-[106px] w-[624px]">Rabanne’s digital experience had to serve two roles at once:</p>
      <Frame2 />
    </div>
  );
}