import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "/src/components/Header";
import Cta from "../components/cta";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>EntiShift</title>
        <meta name='description" content="EntiShift Software HR' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="absolute z-20 lg:z-10 w-full py-6 lg:py-12">
        <Header />
      </div>

      <section className="relative mb-28">
        <span className="absolute z-0 w-5/12 h-screen left-0 top-0 bottom-0">
          <img src="images/decore3.svg" />
        </span>
        <span className="absolute z-0 w-5/12 h-screen -right-14 top-0 bottom-0">
          <img src="images/decore2.svg" />
        </span>

        <div className="max-w-7xl mx-auto p-10">
          <div className="flex">
            <div className="w-6/12 pt-52">
              <h1 className="text-orange-500 font-bold text-xl uppercase mb-6">
                APLIKASI ABSEN ONLINE
              </h1>
              <h2 className="text-gray-900 font-serif text-[55px] leading-[60px] tracking-tighter mb-5">
                Kelola dan Tingkatkan Produktivitas Karyawan di Kantor
              </h2>
              <p className="text-gray-500 max-w-lg leading-8 mb-6 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus. Lorem ipsum dolor sit amet, consectetur . Urna,
                tortor tempus. Lorem ipsum dolor sit amet, consectetur dipiscing
                elit. Urna, tortor tempus.
              </p>
              <div className="flex">
                <Cta />
              </div>
            </div>
            <div className="w=6/12 pt-52 relative">
              <div className="relative z-20 transform translate-x-20 left-11 bottom-5">
                <Image
                  layout=""
                  width={400}
                  height={400}
                  src="/images/hero1.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* colab */}
      <section className="text-center mb-28">
        <div className="container max-w-7xl mx-auto p-20">
          <div className="border rounded-xl shadow-lg p-10">
            <p className="flex justify-center font-serif text-1xl text-gray-950">
              1000000+ Perusahaan telah merasakan mudahnya menggunakan EntiShift
            </p>
            <div class="grid gap-3 md:grid-cols-3 lg:grid-cols-6">
              <div class="mb-6 lg:mb-0">
                <img
                  src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp"
                  class="w-full rounded-md shadow-lg"
                />
              </div>
              <div class="mb-6 lg:mb-0">
                <img
                  src="https://tecdn.b-cdn.net/img/new/fluid/city/111.webp"
                  class="w-full rounded-md shadow-lg"
                />
              </div>
              <div class="mb-6 lg:mb-0">
                <img
                  src="https://tecdn.b-cdn.net/img/new/fluid/city/112.webp"
                  class="w-full rounded-md shadow-lg"
                />
              </div>
              <div class="mb-6 lg:mb-0">
                <img
                  src="https://tecdn.b-cdn.net/img/new/fluid/city/114.webp"
                  class="w-full rounded-md shadow-lg"
                />
              </div>
              <div class="mb-6 lg:mb-0">
                <img
                  src="https://tecdn.b-cdn.net/img/new/fluid/city/115.webp"
                  class="w-full rounded-md shadow-lg"
                />
              </div>
              <div class="mb-6 lg:mb-0">
                <img
                  src="https://tecdn.b-cdn.net/img/new/fluid/city/116.webp"
                  class="w-full rounded-md shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* colab end */}

      {/* fiture */}
      <section className="mb-32">
        <div className="text-center flex flex-col mb-16">
          <h3 className="font-serif text-[55px] text-gray-900 leading-snug ">
            Fitur Aplikasi<span className="text-orange-500"> EntiShift</span>
          </h3>
          <h1 className="font-sans text-1xl text-gray-950">
            EntiShift menyediakan beberapa fitur untuk memudahkan perusahaan
            dalam mengelola performa perusahaan
          </h1>
        </div>

        <div className="container max-w-7xl px-8 mx-auto">
          <div className="text-center grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-2xl overflow-hidden mt-5 transform hover:scale-105 duration-500 ease-in-out rounded-3xl p-10">
              <div className="relative pl-0 inline-flex h-28">
                <div className="z-10 absolute transform translate-y-1/2 -translate-x-1/2 -right-14">
                  <Image
                    layout="fixed"
                    width={60}
                    height={60}
                    src="/images/logo-fitur1.svg"
                  />
                </div>
                <div className="absolute transition duration-100 opacity-50 hover:opacity-100 bottom-3 left-5 transform -translate-x-1/2 bg-orange-500 rounded-tl rounded-tr-md rounded-bl-md rounded-br-2xl w-12 h-12"></div>
              </div>
              <h4 className="font-serif text-xl mb-3">
                Perhitungan Payroll Otomatis
              </h4>
              <h5 className="px-8 mb-8">
                Semua data kehadiran, cuti, dan lembur karyawan tersimpan dalam
                cloud yang memenuhi standar keamanan internasional. Data yang
                sudah tersimpan dapat langsung digunakan untuk proses
                penggajian!
              </h5>
            </div>

            <div className="bg-white shadow-2xl overflow-hidden mt-5 transform hover:scale-105 duration-500 ease-in-out transition opacity-50 hover:opacity-100 rounded-3xl p-10">
              <div className="relative pl-0 inline-flex h-28">
                <div className="z-10 absolute transform translate-y-1/2 -translate-x-1/2 -right-14">
                  <Image
                    layout="fixed"
                    width={60}
                    height={60}
                    src="/images/logo-fitur1.svg"
                  />
                </div>
                <div className="absolute transition-all duration-100 opacity-100 bottom-3 left-5 transform -translate-x-1/2 bg-orange-500 rounded-tl rounded-tr-md rounded-bl-md rounded-br-2xl w-12 h-12"></div>
              </div>
              <h4 className="font-serif text-xl mb-3">
                Teknologi berbasis GPS
              </h4>
              <h5 className="px-8 mb-8">
                GPS (Global Positioning System) memungkinkan perusahaan Anda
                untuk mencatat banyak titik kehadiran setiap karyawan.
              </h5>
            </div>

            <div className="bg-white shadow-2xl overflow-hidden mt-5 transform hover:scale-105 duration-500 ease-in-out transition opacity-50 hover:opacity-100 rounded-3xl p-10">
              <div className="relative pl-0 inline-flex h-28">
                <div className="z-10 absolute transform translate-y-1/2 -translate-x-1/2 -right-14">
                  <Image
                    layout="fixed"
                    width={60}
                    height={60}
                    src="/images/logo-fitur1.svg"
                  />
                </div>
                <div className="absolute transition-all duration-100 hover:opacity-100 bottom-3 left-5 transform -translate-x-1/2 bg-orange-500 rounded-tl rounded-tr-md rounded-bl-md rounded-br-2xl w-12 h-12"></div>
              </div>
              <h4 className="font-serif text-xl mb-3">Employee Database</h4>
              <h5 className="px-8 mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h5>
            </div>

            <div className="bg-white shadow-2xl overflow-hidden mt-5 transform hover:scale-105 duration-500 ease-in-out transition opacity-50 hover:opacity-100 rounded-3xl p-10">
              <div className="relative pl-0 inline-flex h-28">
                <div className="z-10 absolute transform translate-y-1/2 -translate-x-1/2 -right-14">
                  <Image
                    layout="fixed"
                    width={60}
                    height={60}
                    src="/images/logo-fitur1.svg"
                  />
                </div>
                <div className="absolute transition-all duration-100 hover:opacity-100 bottom-3 left-5 transform -translate-x-1/2 bg-orange-500 rounded-tl rounded-tr-md rounded-bl-md rounded-br-2xl w-12 h-12"></div>
              </div>
              <h4 className="font-serif text-xl mb-3">
                Perhitungan Payroll Otomatis
              </h4>
              <h5 className="px-8 mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h5>
            </div>

            <div className="bg-white shadow-2xl overflow-hidden mt-5 transform hover:scale-105 duration-500 ease-in-out transition opacity-50 hover:opacity-100 rounded-3xl p-10">
              <div className="relative pl-0 inline-flex h-28">
                <div className="z-10 absolute transform translate-y-1/2 -translate-x-1/2 -right-14">
                  <Image
                    layout="fixed"
                    width={60}
                    height={60}
                    src="/images/logo-fitur1.svg"
                  />
                </div>
                <div className="absolute transition-all duration-100 hover:opacity-100 bottom-3 left-5 transform -translate-x-1/2 bg-orange-500 rounded-tl rounded-tr-md rounded-bl-md rounded-br-2xl w-12 h-12"></div>
              </div>
              <h4 className="font-serif text-xl mb-3">
                Perhitungan Payroll Otomatis
              </h4>
              <h5 className="px-8 mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h5>
            </div>

            <div className="bg-white shadow-2xl overflow-hidden mt-5 transform hover:scale-105 duration-500 ease-in-out transition opacity-50 hover:opacity-100 rounded-3xl p-10">
              <div className="relative pl-0 inline-flex h-28">
                <div className="z-10 absolute transform translate-y-1/2 -translate-x-1/2 -right-14">
                  <Image
                    layout="fixed"
                    width={60}
                    height={60}
                    src="/images/logo-fitur1.svg"
                  />
                </div>
                <div className="absolute transition-all duration-100 hover:opacity-100 bottom-3 left-5 transform -translate-x-1/2 bg-orange-500 rounded-tl rounded-tr-md rounded-bl-md rounded-br-2xl w-12 h-12"></div>
              </div>
              <h4 className="font-serif text-xl mb-3">
                Perhitungan Payroll Otomatis
              </h4>
              <h5 className="px-8 mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h5>
            </div>
          </div>
        </div>
      </section>
      {/* end fitur */}
    </div>
  );
}
