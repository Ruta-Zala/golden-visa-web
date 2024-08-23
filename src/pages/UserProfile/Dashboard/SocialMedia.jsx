import React, { useState } from "react";
import Twitter from "../../../assets/twitter_icon.png";
import Facebook from "../../../assets/facebook_icon.png";
import Instagram from "../../../assets/instagram_icon.png";
import Linkedin from "../../../assets/linkedin_icon.png";
import Whatsapp from "../../../assets/whatsapp_icon.png";
import EmojiIcon from "../../../assets/emojis.svg";
import CodeSnippet from "../../../assets/codesnippet.svg";
import Attachment from "../../../assets/attachments.svg";
import Uploads from "../../../assets/uploads.svg";
import Close from "../../../assets/close.svg";
import TelegramIcon from "../../../assets/telegram.svg";
import InstagramIcon from "../../../assets/instagram.svg";
import Medium from "../../../assets/medium.svg";
import DiscordIcon from "../../../assets/discord.svg";
import TwitterIcon from "../../../assets/twitter.svg";

const SocialMedia = () => {
  const [activeIcon, setActiveIcon] = useState("Original draft");
  const [inputValue, setInputValue] = useState("");
  const [selectedAccounts, setSelectedAccounts] = useState({});

  const handlePost = async () => {
    const platforms = Object.keys(selectedAccounts).filter(
      (platform) => selectedAccounts[platform]
    );

    if (platforms.length === 0) {
      return;
    }

    try {
      // Iterate over each platform and post content using respective API
      platforms.forEach(async (platform) => {
        switch (platform) {
          case "Facebook":
            await postToFacebook();
            break;
          case "Twitter":
            await postToTwitter();
            break;
          case "Instagram":
            await postToInstagram();
            break;
          case "Linkedin":
            await postToLinkedIn();
            break;
          case "Whatsapp":
            await postToWhatsApp();
            break;
          default:
            break;
        }
      });
    } catch (error) {
      console.error("Error posting content:", error);
      alert("Failed to post content.");
    }
  };

  // Dummy functions for posting - replace these with real API integration
  const postToFacebook = async () => {
    // Integrate Facebook Graph API here
    console.log("Posting to Facebook...");
  };

  const postToTwitter = async () => {
    // Integrate Twitter API here
    console.log("Posting to Twitter...");
  };

  const postToInstagram = async () => {
    // Integrate Instagram API here
    console.log("Posting to Instagram...");
  };

  const postToLinkedIn = async () => {
    // Integrate LinkedIn API here
  };

  const postToWhatsApp = async () => {
    // WhatsApp does not have a public API for posting directly to personal or group chats
    console.log("WhatsApp integration depends on use case...");
  };

  const icons = [
    { name: "Original draft", src: null },
    { name: "Twitter", src: Twitter },
    { name: "Facebook", src: Facebook },
    { name: "Instagram", src: Instagram },
    { name: "Linkedin", src: Linkedin },
    { name: "Whatsapp", src: Whatsapp },
  ];

  const socialMediaIcons = [
    { name: "Telegram", src: TelegramIcon },
    { name: "Instagram", src: InstagramIcon },
    { name: "Medium", src: Medium },
    { name: "Discord", src: DiscordIcon },
    { name: "Twitter", src: TwitterIcon },
  ];

  const editorIcons = [
    { data: EmojiIcon, action: () => handleEmojiClick() },
    { data: CodeSnippet, action: null },
    { data: Attachment, action: null },
    { data: Uploads, action: null },
  ];

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleEmojiClick = () => {
    const emoji = "😊";
    setInputValue((prev) => prev + emoji);
  };

  const handleCheckboxChange = (iconName) => {
    setSelectedAccounts((prev) => ({
      ...prev,
      [iconName]: !prev[iconName],
    }));
  };

  return (
    <div id="IOPn Socials">
      <div className="mb-10 sm:mb-20">
        <h1 className="text-3xl font-medium text-dark-0">Join IOPn Socials</h1>
        <p className="opacity-50 text-lg mt-2">
          Share regular updates on IOPn's development, partnerships, and
          milestones.
        </p>
        <div className="flex flex-wrap gap-4 mt-4">
          {socialMediaIcons.map((icon) => (
            <div
              key={icon.name}
              className="flex items-center justify-center rounded-2xl bg-light_base w-[55px] h-[55px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px]"
            >
              <img
                src={icon.src}
                alt={icon.name}
                className="h-[40px] w-[40px] sm:h-[30px] sm:w-[30px] md:h-[35px] md:w-[35px]"
              />
            </div>
          ))}
        </div>
      </div>

      <div
        className="bg-light_base rounded-2xl min-[765px]:p-6 p-4 sm:py-10 sm:px-8"
        id="Social Media Posting"
      >
        <div className="mb-6">
          <h1 className="text-3xl font-medium text-dark-0">
            Social Media Posting
          </h1>
          <p className="opacity-50 text-lg mt-2">
            Post news straight to your connected socials from here.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-[70%] bg-white-0 rounded-2xl min-[765px]:p-6 p-3 relative">
            <div className="flex items-center gap-2">
              {icons.map((icon) => (
                <div
                  key={icon.name}
                  onClick={() => handleIconClick(icon.name)}
                  className={`cursor-pointer h-[45px] flex items-center justify-center
                    ${activeIcon === icon.name ? "bg-light_base rounded-t-lg font-semibold text-dark-0" : "bg-white"}
                    ${icon.name === "Original draft" ? "w-[120px]" : "w-[45px]"}
                  `}
                >
                  {icon.src ? (
                    <img
                      src={icon.src}
                      alt={icon.name}
                      className="h-[24px] w-[24px]"
                    />
                  ) : (
                    <div className="text-gray-500 text-center">{icon.name}</div>
                  )}
                </div>
              ))}
            </div>
            <textarea
              value={inputValue}
              onChange={handleChange}
              className="bg-light_base rounded-tr-lg p-6 w-full resize-none min-[765px]:h-[400px] h-[calc(100%-95px)] focus-visible:outline-none"
              placeholder="Post news straight to your connected socials from here."
            />
            <div className="flex items-center gap-6 bg-light_base rounded-b-lg p-2">
              <div className="flex gap-6">
                {editorIcons.map((item, index) => (
                  <img
                    key={index}
                    src={item.data}
                    alt="Insert Emoji"
                    className="h-[24px] w-[24px] cursor-pointer"
                    onClick={item.action}
                  />
                ))}
              </div>
              <div className="flex-1 text-right">
                <div className="text-gray-500 text-sm px-3 py-1">
                  {inputValue.length}/450
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[30%] bg-white-0 rounded-2xl p-6">
            <div className="mb-6">
              <h1 className="text-3xl font-medium text-dark-0">
                Where to post
              </h1>
              <p className="opacity-50 text-lg mt-2">
                Select from your connected accounts.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {icons.slice(1).map((icon) => (
                <div
                  key={icon.name}
                  className={`flex items-center gap-2 px-3 py-2 rounded-2xl ${
                    selectedAccounts[icon.name] ? "bg-light_base" : "bg-white"
                  }`}
                >
                  <div
                    className="flex items-center gap-4 flex-1 cursor-pointer"
                    onClick={() => handleCheckboxChange(icon.name)}
                  >
                    <img
                      src={icon.src}
                      alt={icon.name}
                      className="h-[36px] w-[36px]"
                    />
                    <div className="text-md font-medium flex flex-col items-start">
                      <span>John Deo</span>
                      <img
                        src={Close}
                        alt="Close"
                        className="h-[12px] w-[12px] cursor-pointer mt-1"
                        onClick={() => handleIconClick(icon.name)}
                      />
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={selectedAccounts[icon.name] || false}
                    onChange={() => handleCheckboxChange(icon.name)}
                    className="h-6 w-6 border-gray-300 text-[#2573C0] focus:ring-[#2573C0] cursor-pointer rounded-full"
                  />
                </div>
              ))}
            </div>
            <button className="self-stretch capitalize w-full bg-[#2573C0] flex items-center text-[#fff] cursor-pointer whitespace-nowrap rounded-[26px] px-3 py-2 text-md justify-between md:justify-start gap-0 md:gap-[34px] mt-6">
              <div className="flex-1 text-center" onClick={handlePost}>
                Post Now
              </div>

              <div className="flex h-[28px] w-[28px] items-center justify-center rounded-[50%] bg-white-0">
                <img
                  className="h-[10px] w-[10px]"
                  src="images/img_arrowleft_blue_800.svg"
                  alt="Arrow Left"
                  loading="lazy"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
