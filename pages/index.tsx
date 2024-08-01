import Image from "next/image";
import { Inter } from "next/font/google";
import data1 from "@/data/data1.json";
import { HiOutlineStar } from "react-icons/hi";
import { HiOutlineQuestionMarkCircle, HiOutlineShare} from "react-icons/hi2";
import AdsTable from "@/components/AdsTable";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const companyData = data1.data;
  const company = companyData.company;
  const companyRanks = companyData.ranks;
  const top5Countries = companyData.top5Countries;

  return (
    <main
      className={`flex min-h-screen flex-col items-center bg-gray-50 ${inter.className}`}
    >
      <section className="bg-slate-300 w-full">
        <div className="flex flex-col justify-center items-center space-y-4 py-4">
          <h1 className="text-2xl font-bold">{company.legalName}</h1>
          <div className="flex space-x-4">
            <button className="py-1 px-2 rounded-md border bg-white flex justify-center items-center">
              <HiOutlineStar className="mr-2"/> Swipe
            </button>
            <button className="py-1 px-2 rounded-md border bg-blue-600 text-white flex justify-center items-center">
              <HiOutlineShare className="mr-2"/> Share
            </button>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-4 my-4">

        <div className="grid grid-flow-row gap-4 border p-4 rounded-lg shadow-md">
          <div className="border-b font-semibold">Company Info</div>
          <div className="text-sm">
            <span className="font-semibold">Company: </span>
            {company.legalName}
          </div>
          <div className="text-sm">
            <span className="font-semibold">Year Founded: </span>
            {company.yearFounded}
          </div>
          <div className="text-sm">
            <span className="font-semibold">Employees: </span>
            {company.numberOfEmployees}
          </div>
          <div className="text-sm">
            <span className="font-semibold">Headquarters: </span>
            {company.headquarters}
          </div>
          <div className="text-sm">
            <span className="font-semibold">Category: </span>
            <span className="text-blue-700 font-medium">Online Video</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
        <div className="border p-4 flex flex-col space-y-2 rounded-lg shadow-md">
            <span className="text-xs flex items-center">AD spent 365 <HiOutlineQuestionMarkCircle className="ml-1 mb-[1px] text-gray-500 text-sm"/> </span>
            <span className="font-semibold">
              ${company.spend.last365Days.toLocaleString()}
            </span>
          </div>
          <div className="border p-4 flex flex-col space-y-2 rounded-lg shadow-md">
            <span className="text-xs flex items-center">Country rank <HiOutlineQuestionMarkCircle className="ml-1 mb-[1px] text-gray-500 text-sm"/> </span>
            <span className="font-semibold">#{companyRanks.global.rank}</span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="border p-4 flex flex-col space-y-2 rounded-lg shadow-md">
            <span className="text-xs flex items-center">Global rank <HiOutlineQuestionMarkCircle className="ml-1 mb-[1px] text-gray-500 text-sm"/> </span>
            <span className="font-semibold">#{companyRanks.country.rank}</span>
          </div>

          <div className="border p-4 flex flex-col space-y-2 rounded-lg shadow-md">
            <span className="text-xs flex items-center">Category rank <HiOutlineQuestionMarkCircle className="ml-1 mb-[1px] text-gray-500 text-sm"/> </span>
            <span className="font-semibold">#{companyRanks.category.rank}</span>
          </div>
        </div>

        <div className="grid grid-flow-row gap-4 border p-4 rounded-lg shadow-md">
          <div className="border-b font-semibold">Campaigns per country</div>
          {top5Countries.map((country) => (
            <div key={country.countryId} className="text-xs flex items-center space-x-1">
              <Image src={country.icon} width={20} height={20} alt="flag" className="mr-1.5"/>
              {country.countryId}:
              <span className="font-medium pl-[1px]">
                {country.count} ({Math.round(country.percentage)})
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="p-4 w-[25rem] md:w-[37rem] lg:w-[70rem]">
        <AdsTable/>
      </section>
    </main>
  );
}
