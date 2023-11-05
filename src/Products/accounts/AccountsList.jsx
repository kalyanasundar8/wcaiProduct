import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export const AccountsList = ({ iconName }) => {
  const [instaAccounts, setInstaAccounts] = useState([
    { id: 1, accName: "kalyan" },
    { id: 2, accName: "sundar" },
    { id: 3, accName: "gunther" },
  ]);

  const [facebookAccounts, setFacebookAccounts] = useState([
    { id: 4, accName: "kalyan" },
    { id: 5, accName: "gunther" },
    { id: 6, accName: "kick" },
  ]);

  const [twitterAccounts, setTwitterAccounts] = useState([
    { id: 7, accName: "daredevil" },
    { id: 8, accName: "punisher" },
    { id: 9, accName: "gunther" },
  ]);

  const [linkedInAccounts, setLinkedInAccounts] = useState([
    { id: 10, accName: "batman" },
    { id: 11, accName: "superman" },
    { id: 12, accName: "heman" },
  ]);

  const [selectedAccount, setSelectedAccount] = useState([]);
  console.log(selectedAccount);

  const handleSelectedAccount = (accountId, accountName) => {
    const account = { id: accountId, name: accountName };
    if (isSelected(account)) {
      setSelectedAccount(selectedAccount.filter((acc) => acc.id !== accountId));
    } else {
      setSelectedAccount([...selectedAccount, account]);
    }
  };

  const isSelected = (account) => {
    return selectedAccount.some((selected) => selected.id === account.id);
  };

  return (
    <section className="">
    <section className="bg-blue-100 p-3 mx-2 my-2 relative">
    <div className="flex items-center justify-between">
    <ul className="flex items-center justify-center gap-2 sm:flex-wrap text-xs xl:text-xl md:text-sm lg:text-sm sm:text-xs w-[600px]">
        {selectedAccount.map((account) => (
          <li key={account.id} className="bg-blue-400 px-5 py-[1px] rounded-lg flex items-center text-[10px] text-white">
            <FontAwesomeIcon icon={faUser} className="mr-2 text-[10px]"/>{account.name}
          </li>
        ))}
      </ul>
      <button className="absolute top-3 right-10 text-sm font-light text-blue-700">
        <FontAwesomeIcon icon={faPlus} className="text-sm mr-2" />
        Add Account
      </button>
    </div>
      <div className="flex flex-wrap items-center justify-start mt-10">
        {iconName === "insta" ? (
          instaAccounts.map((insta) => (
            <div
              className="flex items-center justify-center w-1/4 my-1"
              key={insta.id}
            >
              <p
                className="p-1 rounded-lg cursor-pointer"
                onClick={() => handleSelectedAccount(insta.id, insta.accName)}
              >
                @{insta.accName}
              </p>
            </div>
          ))
        ) : iconName === "facebook" ? (
          facebookAccounts.map((facebook) => (
            <div
              className="flex items-center justify-center w-1/4 my-1"
              key={facebook.id}
            >
              <p
                className="p-1 rounded-lg cursor-pointer"
                onClick={() => handleSelectedAccount(facebook.id, facebook.accName)}
              >
                @{facebook.accName}
              </p>
            </div>
          ))
        ) : iconName === "twitter" ? (
            twitterAccounts.map((twitter) => (
                <div
                  className="flex items-center justify-center w-1/4 my-1"
                  key={twitter.id}
                >
                  <p
                    className="p-1 rounded-lg cursor-pointer"
                    onClick={() => handleSelectedAccount(twitter.id, twitter.accName)}
                  >
                    @{twitter.accName}
                  </p>
                </div>
              ))
        ) : iconName === "linkedin" ? (
            linkedInAccounts.map((linkedin) => (
                <div
                  className="flex items-center justify-center w-1/4 my-1"
                  key={linkedin.id}
                >
                  <p
                    className="p-1 rounded-lg cursor-pointer"
                    onClick={() => handleSelectedAccount(linkedin.id, linkedin.accName)}
                  >
                    @{linkedin.accName}
                  </p>
                </div>
              ))
        ) : (
          <p>No accounts selected</p>
        )}
      </div>
    </section>
    </section>
  );
};
