import React, { useEffect } from 'react';

const TwitterPost = () => {
  
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }, []);

  return (
    <section className="bg-white py-10 sm:px-32 w-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

      <div className="max-w-2xl">
        <div className="flex gap-2 items-center tracking-tight">
          <div className="h-8 w-8 rounded-sm bg-black" />
          <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Latest Posts on X</h3>

        </div>  
        <p className="text-lg leading-8 text-gray-600 font-semibold">
          Current events 
        </p>
      </div>

      <div className="twitterContainer flex flex-col items-center mt-4">
          <div className="bg-white drop-shadow-lg p-8 mx-4 rounded-xl md:w-10/12 lg:w-8/12 ">
            <div className=" w-full max-h-[600px] overflow-y-scroll mb-10 hideScrollbar rounded-xl">
              <div className="twitter-embed">
                <a
                  className="twitter-timeline"
                  data-theme="light"
                  data-tweet-limit="5"
                  data-chrome="noheader nofooter noborders"
                  href="https://twitter.com/Karsyzz"
                >
                  Latest Tweets
                </a>
              </div>

            </div>
          </div>
      </div>
      </div>
    </section>

  );
};

export default TwitterPost;


{/* <blockquote class="twitter-tweet"><p lang="en" dir="ltr">This is very exciting!<a href="https://t.co/x30QoIgJM2">https://t.co/x30QoIgJM2</a></p>&mdash; Karsy (@karsyzz) <a href="https://twitter.com/karsyzz/status/1715093544594031067?ref_src=twsrc%5Etfw">October 19, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */}