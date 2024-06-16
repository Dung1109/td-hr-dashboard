import {Button} from "@/components/ui/button"
import {Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger,} from "@/components/ui/dialog"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {ThongTinCaNhan} from "@/components/TabDemo";

export function FormDialog() {
    return (
        <Dialog >
            <DialogTrigger asChild>
                <Button variant="outline">Edit Profile</Button>
            </DialogTrigger>
            <DialogContent onInteractOutside={(e) => e.preventDefault()} className="sm:max-w-[986px]">
                <DialogHeader>
                    <DialogTitle>Thông tin nhân viên</DialogTitle>
                </DialogHeader>
                <div className="flex gap-4">
                    <div className="grid gap-4 py-4 min-w-[400px]">
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="nvId" className="text-left">
                                Mã nhân viên<span className="text-red-600">*</span>
                            </Label>
                            <Input
                                id="nvId"
                                defaultValue="NV00001"
                                className="col-span-2"
                            />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="fullName" className="text-left">
                                Họ và tên<span className="text-red-600">*</span>
                            </Label>
                            <Input
                                id="fullName"
                                defaultValue="Nguyễn Văn A"
                                className="col-span-2"
                            />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="phongban" className="text-left">
                                Phòng ban<span className="text-red-600">*</span>
                            </Label>
                            <Input
                                id="phongban"
                                defaultValue=""
                                className="col-span-2"
                            />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="chucdanh" className="text-left">
                                Chức danh
                            </Label>
                            <Input
                                id="chucdanh"
                                defaultValue=""
                                className="col-span-2"
                            />
                        </div>

                    </div>
                    <div className="grid gap-4 py-4 min-w-[400px]">
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="dob" className="text-left">
                                Ngày sinh
                            </Label>
                            <Input
                                id="dob"
                                defaultValue=""
                                className="col-span-2"
                                type="date"
                            />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="gioitinh" className="text-left">
                                Giới tính
                            </Label>
                            <RadioGroup defaultValue="nam" className="flex">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="nam" id="nam"/>
                                    <Label htmlFor="nam">Nam</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="nu" id="nu"/>
                                    <Label htmlFor="nu">Nữ</Label>
                                </div>
                            </RadioGroup>
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="cccd" className="text-left">
                                Số CCCD
                            </Label>
                            <Input
                                id="cccd"
                                defaultValue=""
                                className="col-span-2"
                                type="text"
                            />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="ngaycccd" className="text-left">
                                Ngày cấp
                            </Label>
                            <Input
                                id="ngaycccd"
                                defaultValue=""
                                className="col-span-2"
                                type="date"
                            />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="noicapcccd" className="text-left">
                                Nơi cấp CCCD
                            </Label>
                            <Input
                                id="noicapcccd"
                                defaultValue=""
                                className="col-span-2"
                                type="text"
                            />
                        </div>
                    </div>
                </div>
                <ThongTinCaNhan/>
                <DialogFooter>
                    <Button type="submit">Lưu và thêm</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
