import React, { useState } from 'react';
import Twitter from '../../../assets/twitter_icon.png';
import Facebook from '../../../assets/facebook_icon.png';
import Instagram from '../../../assets/instagram_icon.png';
import Linkedin from '../../../assets/linkedin_icon.png';
import Whatsapp from '../../../assets/whatsapp_icon.png';
import EmojiIcon from '../../../assets/emojis.svg';
import CodeSnippet from '../../../assets/codesnippet.svg';
import Attachment from '../../../assets/attachments.svg';
import Uploads from '../../../assets/uploads.svg';
import Close from '../../../assets/close.svg';
import TelegramIcon from '../../../assets/telegram.svg';
import InstagramIcon from '../../../assets/instagram.svg';
import Medium from '../../../assets/medium.svg';
import DiscordIcon from '../../../assets/discord.svg';
import TwitterIcon from '../../../assets/twitter.svg';

const SocialMedia = () => {
  const [activeIcon, setActiveIcon] = useState('Original draft');
  const [inputValue, setInputValue] = useState('');
  const [checkedIcons, setCheckedIcons] = useState({});

  const icons = [
    { name: 'Original draft', src: null },
    { name: 'Twitter', src: Twitter },
    { name: 'Facebook', src: Facebook },
    { name: 'Instagram', src: Instagram },
    { name: 'Linkedin', src: Linkedin },
    { name: 'Whatsapp', src: Whatsapp },
  ];

  const socialMediaIcons = [
    { name: 'Telegram', src: TelegramIcon },
    { name: 'Instagram', src: InstagramIcon },
    { name: 'Medium', src: Medium },
    { name: 'Discord', src: DiscordIcon },
    { name: 'Twitter', src: TwitterIcon },
  ];

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleEmojiClick = () => {
    const emoji = '😊';
    setInputValue((prev) => prev + emoji);
  };

  const handleCheckboxChange = (iconName) => {
    setCheckedIcons((prev) => ({
      ...prev,
      [iconName]: !prev[iconName],
    }));
  };

  return (
    <div className="w-full" id='IOPn Socials'>
      <div className="mb-16">
        <h1 className="text-3xl font-medium text-[#08122A]">Join IOPn Socials</h1>
        <p className="opacity-50 text-lg mt-2">
          Share regular updates on IOPn's development, partnerships, and milestones.
        </p>
        <div className="flex flex-wrap gap-4 mt-4">
          {socialMediaIcons.map((icon) => (
            <div
              key={icon.name}
              className="flex items-center justify-center rounded-2xl bg-gray-100 w-[80px] h-[80px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px]"
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

      <div className="bg-gray-100 rounded-2xl min-[765px]:p-6 p-3" id="Social Media Posting">
        <div className="mb-6">
          <h1 className="text-3xl font-medium text-[#08122A]">Social Media Posting</h1>
          <p className="opacity-50 text-lg mt-2">
            Post news straight to your connected socials from here.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-[70%] bg-white-0 rounded-2xl min-[765px]:p-6 p-3">
            <div className="flex items-center gap-2">
              {icons.map((icon) => (
                <div
                  key={icon.name}
                  onClick={() => handleIconClick(icon.name)}
                  className={`cursor-pointer h-[45px] flex items-center justify-center
                    ${activeIcon === icon.name ? 'bg-gray-100 rounded-t-lg' : 'bg-white'}
                    ${icon.name === 'Original draft' ? 'w-[120px]' : 'w-[45px]'}
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
              className="bg-gray-100 rounded-lg p-6 w-full resize-none min-[765px]:h-[400px] h-[200px]"
              placeholder="Post news straight to your connected socials from here."
            />
            <div className="flex items-center gap-6 bg-gray-100 rounded-b-lg p-2">
              <div className="flex gap-6">
                <img
                  src={EmojiIcon}
                  alt="Insert Emoji"
                  className="h-[24px] w-[24px] cursor-pointer"
                  onClick={handleEmojiClick}
                />
                <img
                  src={CodeSnippet}
                  alt="Code Snippet"
                  className="h-[24px] w-[24px] cursor-pointer"
                />
                <img
                  src={Attachment}
                  alt="Attachments"
                  className="h-[24px] w-[24px] cursor-pointer"
                />
                <img
                  src={Uploads}
                  alt="Uploads"
                  className="h-[24px] w-[24px] cursor-pointer"
                />
              </div>
              <div className="flex-1 text-right">
                <div className="text-gray-500 text-sm px-3 py-1">
                  {inputValue.length}/450
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[30%] bg-white-0 rounded-2xl p-6">
            <div className="mb-6">
              <h1 className="text-3xl font-medium text-[#08122A]">Where to post</h1>
              <p className="opacity-50 text-lg mt-2">
                Select from your connected accounts.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {icons.slice(1).map((icon) => (
                <div
                  key={icon.name}
                  className={`flex items-center gap-2 p-2 rounded-2xl ${
                    checkedIcons[icon.name] ? 'bg-gray-100' : 'bg-white'
                  }`}
                >
                  <div className="flex items-center gap-2 flex-1">
                    <img
                      src={icon.src}
                      alt={icon.name}
                      className="h-[24px] w-[24px]"
                    />
                    <div className="text-md font-medium flex flex-col items-start">
                      <span>Johan Deo</span>
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
                    checked={checkedIcons[icon.name] || false}
                    onChange={() => handleCheckboxChange(icon.name)}
                    className="h-6 w-6 rounded-full border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </div>
              ))}
            </div>
            <button className="self-stretch capitalize w-full bg-[#2573C0] flex items-center text-[#fff] cursor-pointer whitespace-nowrap rounded-[26px] px-3 py-2 text-md justify-between md:justify-start gap-0 md:gap-[34px] mt-6">
              <div className="flex-1 text-center">Post Now</div>
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
