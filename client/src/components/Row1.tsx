import { useGetKpisQuery } from "@/states/api"
import DashBoardBox from "./DashBoardBox"

type Props = {}

const Row1 = (props: Props) => {
  const { data } = useGetKpisQuery()
  return (
    <>
      <DashBoardBox bgcolor="#fff" sx={{ gridArea: "a" }}></DashBoardBox>
      <DashBoardBox bgcolor="#fff" sx={{ gridArea: "b" }}></DashBoardBox>
      <DashBoardBox bgcolor="#fff" sx={{ gridArea: "c" }}></DashBoardBox>
    </>
  )
}

export default Row1
