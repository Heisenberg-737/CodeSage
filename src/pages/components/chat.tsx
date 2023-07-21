/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useState, useEffect, type FormEvent } from "react";
import { UserCircleIcon, TrashIcon } from "@heroicons/react/24/solid";
import { env } from "../../env.mjs";
import Typewriter from "typewriter-effect";
import { Configuration, OpenAIApi } from "openai";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";
const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API,
});
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
delete configuration.baseOptions.headers["User-Agent"];

const openai = new OpenAIApi(configuration);

export default function Chat(props: { code: string }) {
  const { data: session } = useSession();
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");
  const [history, setHistory] = useState([] as string[][]);

  const [submit, setSubmit] = useState(false);

  // Request openai from api endpoint
  useEffect(() => {
    async function fetchData() {
      if (submit && message) {
        const context =
          history.length >= 2
            ?
              "The context for this conversation is as follows:" +
              "\n My code: " +
              props.code +
              "\nMy first prompt:" +
              (history.slice(-2)?.[0]?.[1] || "") +
              "\n Your first response:" +
              (history.slice(-2)?.[1]?.[1] || "") +
              "\n My new prompt:" +
              message +
              "\n Your new response:"
            : message + "\n My code: " + props.code;
        history.push([session?.user?.name || "Guest", message]);
        const completion = await openai.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: context }],
          temperature: 1,
          max_tokens: 128,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
        });

        setHistory(
          [
            ...history,
            ["CodeSage", completion?.data?.choices[0]?.message?.content || ""], 
          ]
        );
      }
    }
    void fetchData();
    setSubmit(false);
  }, [submit]);

  const handleQuery = (text: string) => {
    setQuery(text);
    setMessage(text);
  };

  const setSubmission = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmit(!submit);
    setQuery("");
  };

  const setButtonSubmission = (text: string) => {
    setMessage(text);
    setSubmit(!submit);
    setQuery("");
  };

  const chatSelector = (msg: string) => {
    if (msg == session?.user?.name) {
      return (
        <Image
          src={(session && session.user.image) || ""}
          alt="avatar"
          className="mr-4 h-8 w-8 rounded-full"
          height={500}
          width={500}
        />
      );
    } else if (msg == "Guest") {
      return (
        <UserCircleIcon className="mr-2 inline h-8 w-8 rounded-full text-gray-800 dark:text-gray-400 sm:mb-1" />
      );
    } else {
      return (
        <>
          <Image
            src="/images/logo.svg"
            className="svgfill-gpt mb-0.5   mr-2 hidden h-8 w-8 dark:inline sm:mb-0 sm:mt-0.5"
            alt="ChatGPT"
            height={500}
            width={500}
          />
          <Image
            src="/images/logo.svg"
            className="mb-0.5 mr-2   inline h-8 w-8 dark:hidden sm:mb-0 sm:mt-0.5"
            alt="ChatGPT"
            height={500}
            width={500}
          />
        </>
      );
    }
  };

  return (
    <section className="row-span-3 h-full">
      <div className="relative z-10 flex h-full flex-col justify-between overflow-hidden">
        <div className="relative flex h-full flex-col bg-gray-200 bg-opacity-40 duration-150 dark:bg-gray-700 dark:bg-opacity-20">
          <div className="relative z-10 flex items-center border-y border-y-gray-600 bg-gray-100 px-2 py-2 duration-150 dark:bg-gray-800  ">
            <p className="flex select-none items-center text-lg font-semibold text-gray-800 duration-150 dark:text-white">
              <AdjustmentsHorizontalIcon className="mr-2 h-6 w-6 text-gray-600 dark:text-gray-400" />{" "}
              Use{" "}
              <span className="mx-[0.38rem] text-gptDarker dark:text-gpt">
                {" "}
                CodeSage{" "}
              </span>{" "}
              to Analyze your Code
            </p>
            <div className="ml-auto flex items-center">
              {session?.user.image ? (
                <Image
                  src={(session && session.user.image) || ""}
                  alt="avatar"
                  className="mr-2 h-8 w-8 rounded-full border-[1.5px] border-gray-900 text-gray-800 duration-150 dark:border-white dark:text-white"
                  height={500}
                  width={500}
                />
              ) : (
                <UserCircleIcon className="relative my-auto mr-2 inline h-8 w-8 rounded-full border-[1.5px] border-gray-900 text-gray-800 duration-150 dark:border-white dark:text-white sm:mb-1" />
              )}
              <p className="  text-gray-800 duration-150 dark:text-gray-100">
                {session && "Signed in as "}
                {session ? session.user.name : "Guest"}
              </p>
              <button
                className="ml-4 flex items-center rounded-lg bg-gptLight px-2 py-1 text-gray-900 duration-75 hover:bg-gpt dark:bg-gpt dark:hover:bg-gptDark"
                onClick={() => setHistory([])}
              >
                <TrashIcon className="inline h-6 w-6 lg:mr-1" />

                <span className="hidden font-semibold lg:inline">Clear</span>
              </button>
            </div>
          </div>

          <div className="scrollbar flex h-[10rem] grow flex-col-reverse overflow-y-scroll bg-gray-300 bg-opacity-80 p-4 pb-1 shadow-inner dark:bg-gray-900 dark:bg-opacity-40">
            <div className=" relative z-10 flex flex-col">
              {history[0] ? (
                history.map((msg, i) => (
                  <div
                    key={i}
                    className="mb-3 flex flex-col rounded-lg bg-white p-2 px-4 duration-150  dark:bg-gray-800 "
                  >
                    <div className="flex items-center">
                      {chatSelector(msg[0] || "")}
                      <p className="text-sm font-semibold text-gray-700 duration-150 dark:text-gray-200">
                        {msg[0]}:
                      </p>
                    </div>

                    <div className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                      {msg[0] == "CodeSage" || msg[0] == "gpt-4" ? (
                        <Typewriter
                          options={{
                            loop: false,
                            delay: 20,
                            cursor: "",
                            autoStart: true,
                          }}
                          onInit={(typewriter) =>
                            typewriter.typeString(msg[1] || "").start()
                          }
                        />
                      ) : (
                        msg[1]
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="grid h-full grid-cols-3 gap-3 pb-3">
                  <button
                    onClick={() => setButtonSubmission("Explain my code.")}
                    className="rounded-lg bg-gray-100 p-2 duration-150 hover:bg-gray-50 dark:bg-gray-800 hover:dark:bg-gray-900"
                  >
                    Explain my code.
                  </button>
                  <button
                    onClick={() => setButtonSubmission("Is my code well-organized and easy to navigate?")}
                    className="rounded-lg bg-gray-100 p-2 duration-150 hover:bg-gray-50 dark:bg-gray-800 hover:dark:bg-gray-900"
                  >
                    Is my code well-organized and easy to navigate?
                  </button>
                  <button
                    onClick={() => setButtonSubmission("What is the time complexity of critical functions or algorithms in my code?")}
                    className="rounded-lg bg-gray-100 p-2 duration-150 hover:bg-gray-50 dark:bg-gray-800 hover:dark:bg-gray-900"
                  >
                    What is the time complexity of my code?
                  </button>
                  <button
                    onClick={() =>
                      setButtonSubmission(
                        "Are there potential edge cases that my code doesnt handle properly? "
                      )
                    }
                    className="rounded-lg bg-gray-100 p-2 duration-150 hover:bg-gray-50 dark:bg-gray-800 hover:dark:bg-gray-900"
                  >
                    Are there potential edge cases that my code doesnt handle properly?
                  </button>

                  <button
                    onClick={() =>
                      setButtonSubmission(
                        "How can I reduce the space complexity of my code?"
                      )
                    }
                    className="rounded-lg bg-gray-100 p-2 duration-150 hover:bg-gray-50 dark:bg-gray-800 hover:dark:bg-gray-900"
                  >
                    How can I reduce the space complexity of my code?
                  </button>
                  <button
                    onClick={() =>
                      setButtonSubmission(
                        "Is my code scalable?"
                      )
                    }
                    className="rounded-lg bg-gray-100 p-2 duration-150 hover:bg-gray-50 dark:bg-gray-800 hover:dark:bg-gray-900"
                  >
                    Is my code scalable?
                  </button>
                  <button
                    onClick={() =>
                      setButtonSubmission(
                        "Are there any potential security vulnerabilities in my code? "
                      )
                    }
                    className="rounded-lg bg-gray-100 p-2 duration-150 hover:bg-gray-50 dark:bg-gray-800 hover:dark:bg-gray-900"
                  >
                    Are there any potential security vulnerabilities in my code?
                  </button>
                  <button
                    onClick={() =>
                      setButtonSubmission(
                        "How robust is my code when handling unexpected inputs or errors? "
                      )
                    }
                    className="rounded-lg bg-gray-100 p-2 duration-150 hover:bg-gray-50 dark:bg-gray-800 hover:dark:bg-gray-900"
                  >
                    How robust is my code when handling unexpected inputs or errors?
                  </button>
                  <button
                    onClick={() =>
                      setButtonSubmission(
                        "Suggest few alternative ways to achieve the same functionality as my code. "
                      )
                    }
                    className="rounded-lg bg-gray-100 p-2 duration-150 hover:bg-gray-50 dark:bg-gray-800 hover:dark:bg-gray-900"
                  >
                    Suggest few alternative ways to achieve the same functionality as my code.
                  </button>
                  
                </div>
              )}
            </div>
          </div>
          <div className="relative z-10 border-t border-gray-600 bg-gray-50 p-3 duration-150 dark:bg-gray-800">
            <form
              onSubmit={(e) => setSubmission(e)}
              className="flex items-center"
            >
              <input
                type="text"
                placeholder="Type a message..."
                className="w-full rounded-lg border  border-gray-300 bg-gray-100 px-4 py-1 text-gray-900 duration-150 focus:outline-none  focus:ring-2 focus:ring-gpt dark:border-gray-700 dark:bg-gray-600 dark:text-gray-200"
                value={query}
                onChange={(e) => handleQuery(e.target.value)}
              />
              <button
                type="submit"
                className="ml-2 flex items-center rounded-lg bg-gptLight px-2 py-1 text-white duration-150 ease-in-out hover:bg-gpt dark:bg-gpt dark:hover:bg-gptDark "
              >
                <Image
                  src="/images/logo.svg"
                  className=" inline h-6 w-6 "
                  height={500}
                  width={500}
                  alt="ChatGPT"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
