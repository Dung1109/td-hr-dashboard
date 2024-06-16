import {Card, CardContent,} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Tabs, TabsContent, TabsList, TabsTrigger,} from "@/components/ui/tabs"
import React from "react";
import {Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Button} from "@/components/ui/button";

export function ThongTinCaNhan() {
    return (
        <Tabs defaultValue="tienluong" className="w-[820px] h-[280px]">
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="tienluong" className="data-[state=active]:bg-blue-200">Thông tin tiền
                    lương</TabsTrigger>
                <TabsTrigger value="nganhang" className="data-[state=active]:bg-blue-200">Tài khoản ngân
                    hàng</TabsTrigger>
                <TabsTrigger value="lienhe" className="data-[state=active]:bg-blue-200">Thông tin liên hệ</TabsTrigger>
            </TabsList>
            <TabsContent value="tienluong" className="pt-1.5">
                <Card>
                    <CardContent>
                        <div className="pt-2 grid grid-cols-3 gap-4">
                            <div className="space-y-1">
                                <Label htmlFor="luongthoathuan">Lương thỏa thuận</Label>
                                <Input id="luongthoathuan" defaultValue="" type="number"/>
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="luongtrachnhiem">Lương trách nhiệm</Label>
                                <Input id="luongtrachnhiem" defaultValue="" type="number"/>
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="luongbaohiem">Lương đóng bảo hiểm</Label>
                                <Input id="luongbaohiem" defaultValue="" type="number"/>
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="masothue">Mã số thuế</Label>
                                <Input id="masothue" defaultValue="" type="text"/>
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="loaihopdong">Loại hợp đồng<span
                                    className="text-red-600">*</span></Label>
                                <Input id="loaihopdong" defaultValue="" type="text"/>
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="nguoiphuthuoc">Số người phụ thuộc</Label>
                                <Input id="nguoiphuthuoc" defaultValue="" type="number"/>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="nganhang" className="pt-1">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead
                                className="text-center border border-gray-400 text-neutral-900 w-[150px] bg-teal-200 ">Số
                                tài khoản</TableHead>
                            <TableHead className="text-center border border-gray-400 text-neutral-900 bg-teal-200">Tên
                                ngân hàng</TableHead>
                            <TableHead className="text-center border border-gray-400 text-neutral-900 bg-teal-200">Chi
                                nhánh</TableHead>
                            <TableHead className="text-center border border-gray-400 text-neutral-900 bg-teal-200">Tỉnh/TP
                                của ngân hàng</TableHead>
                            <TableHead
                                className="text-center border border-gray-400 text-neutral-900 w-[40px] bg-teal-200">Hành
                                động</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="border border-gray-400 font-medium">
                                <Input id="nganhang" type="text" className=" border border-cyan-600"/>
                            </TableCell>
                            <TableCell className="border border-gray-400">
                                <Input id="nganhang" type="text" className=" border border-cyan-600"/>
                            </TableCell>
                            <TableCell className="border border-gray-400">
                                <Input id="nganhang" type="text" className=" border border-cyan-600"/>
                            </TableCell>
                            <TableCell className="border border-gray-400 text-right">
                                <Input id="nganhang" type="text" className=" border border-cyan-600"/>
                            </TableCell>
                            <TableCell className="border border-gray-400 text-right">
                                <Button className="bg-cyan-600 text-white">Xóa</Button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="border border-gray-400 font-medium">
                                <Input id="nganhang" type="text" className=" border border-cyan-600"/>
                            </TableCell>
                            <TableCell className="border border-gray-400">
                                <Input id="nganhang" type="text" className=" border border-cyan-600"/>
                            </TableCell>
                            <TableCell className="border border-gray-400">
                                <Input id="nganhang" type="text" className=" border border-cyan-600"/>
                            </TableCell>
                            <TableCell className="border border-gray-400 text-right">
                                <Input id="nganhang" type="text" className=" border border-cyan-600"/>
                            </TableCell>
                            <TableCell className="border border-gray-400 text-right">
                                <Button className="bg-cyan-600 text-white">Xóa</Button>
                            </TableCell>
                        </TableRow>

                    </TableBody>
                    <TableFooter>
                        <TableRow className="bg-white border-none">
                            <TableCell>
                                <Button className="bg-cyan-600 text-white">Thêm dòng</Button>
                            </TableCell>
                            <TableCell className="flex justify-center">
                                <Button className="bg-cyan-600 text-white">Xóa dòng</Button>
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>

            </TabsContent>
            <TabsContent value="lienhe" className="pt-1">
                <Card>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="diachi">Địa chỉ</Label>
                            <Input id="diachi" type="text"/>
                        </div>
                        <div className="grid grid-cols-7 gap-4">
                            <div className="space-y-1 col-span-2">
                                <Label htmlFor="dienthoailienhe">Điện thoại liên hệ</Label>
                                <Input id="dienthoailienhe" type="text"/>
                            </div>
                            <div className="space-y-1 col-span-3">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email"/>
                            </div>
                            <div className="space-y-1 col-span-2">
                                <Label htmlFor="dienthoainguoithan">Điện thoại người thân</Label>
                                <Input id="dienthoainguoithan" type="text"/>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    )
}
