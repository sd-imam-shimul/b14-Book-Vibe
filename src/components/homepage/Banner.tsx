import React from "react";
import Image from "next/image";
import bannerImg from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 overflow-hidden rounded-3xl bg-gradient-to-br from-amber-100 via-orange-100 to-rose-100 p-6 md:p-10 lg:p-14 shadow-xl">

          {/* Left Content */}
          <div className="space-y-6">
            <span className="inline-block rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-orange-600 shadow-sm">
              📚 Discover Your Next Read
            </span>

            <h1 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
              Books that make
              <span className="block text-orange-600">
                your world better.
              </span>
            </h1>

            <p className="max-w-lg text-base leading-7 text-gray-600 md:text-lg">
              Explore amazing books, discover new stories, and find your next
              favorite read to freshen up your bookshelf.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button className="btn btn-primary rounded-full px-7">
                Explore Books →
              </button>

              <button className="btn btn-outline rounded-full px-7">
                Learn More
              </button>
            </div>

            {/* Small Stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">10K+</h3>
                <p className="text-sm text-gray-500">Books</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900">5K+</h3>
                <p className="text-sm text-gray-500">Readers</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900">4.9★</h3>
                <p className="text-sm text-gray-500">Rating</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orange-300/40 blur-3xl"></div>

            <div className="relative overflow-hidden rounded-3xl bg-white/50 p-3 shadow-2xl backdrop-blur-sm">
              <Image
                src={bannerImg}
                alt="Books"
                width={600}
                height={600}
                priority
                className="h-auto w-full rounded-2xl object-cover transition duration-500 hover:scale-105"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;