import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import data2 from "@/data/data2.json";
import Image from "next/image";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

const AdsTable = () => {

  const adsData = data2.data.results;

  function formatSeconds(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

  return (
    <div className="border  shadow-md rounded-md">
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead>Thumbnail</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Brand</TableHead>
            <TableHead>Total ad spend</TableHead>
            <TableHead>Ad spend 30</TableHead>
            <TableHead>Publish Date</TableHead>
            <TableHead>Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {adsData.map((video) => (
            <TableRow key={video.ytVideoId}>
              <TableCell>
                <Image
                  src={video.thumbnail}
                  height={35}
                  width={35}
                  className="rounded-full h-[35px]"
                  alt="thumbnail"
                />
              </TableCell>
              <TableCell>{video.title}</TableCell>
              <TableCell>{video.brandName}</TableCell>
              <TableCell>{video.totalSpend || 0}</TableCell>
              <TableCell>{video.last30Days || 0}</TableCell>
              <TableCell className="whitespace-nowrap">{new Date(video.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</TableCell>
              <TableCell>{formatSeconds(video.duration)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-between items-center border-t p-3">
        <div className="flex flex-1 justify-center items-center space-x-4">
          <HiOutlineArrowLeft className="px-2 py-1 border text-3xl rounded-md w-10 cursor-pointer" />
          <span>1</span>
          <HiOutlineArrowRight className="px-2 py-1 border text-3xl rounded-md w-10 cursor-pointer" />
        </div>
        <div className="border py-1.5 rounded-md px-2">
          <select>
            <option className="p-2" value="1">
              1
            </option>
            <option className="p-2" value="2">
              2
            </option>
            <option className="p-2" value="3">
              3
            </option>
            <option className="p-2" value="4">
              4
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default AdsTable;
