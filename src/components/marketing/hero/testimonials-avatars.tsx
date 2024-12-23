import { Star } from "lucide-react";
import AvatarCircles from "../../ui/avatar-circles";

const avatars = [
	{
	  imageUrl: "https://qpdwualqgmqaxfgoapyc.supabase.co/storage/v1/object/public/appboilerplate/avatars/Profile%20Facelift.jpg?t=2024-12-23T11%3A27%3A14.031Z",
	  profileUrl: "https://x.com/robin_faraj",
	},
	{
	  imageUrl: "https://qpdwualqgmqaxfgoapyc.supabase.co/storage/v1/object/public/appboilerplate/landingpage/andrei.jpg",
	  profileUrl: "https://x.com/AndreiHudovich",
	},
	{
	  imageUrl: "https://qpdwualqgmqaxfgoapyc.supabase.co/storage/v1/object/public/appboilerplate/landingpage/miguel_new.jpg?t=2024-12-23T11%3A31%3A29.278Z",
	  profileUrl: "https://x.com/fullstackmiguel",
	},
	{
	  imageUrl: "https://qpdwualqgmqaxfgoapyc.supabase.co/storage/v1/object/public/appboilerplate/landingpage/adam.jpg?t=2024-12-23T11%3A31%3A19.946Z",
	  profileUrl: "https://x.com/AdamBartas",
	},
  ];
  

export function TestimonialsAvatars() {
	return (
		<div className="flex flex-col items-center justify-center gap-2 align-middle md:flex-row md:items-start">
			<AvatarCircles numPeople={99} avatarUrls={avatars} />
			<div className="flex flex-col items-center md:items-start">
				<div className="text-sm font-semibold">Loved by Founders</div>
				<div className="flex gap-1">
					{Array.from({ length: 5 }, (_, i) => (
						<Star
							key={i}
							className="h-4 w-4 fill-orange-400 text-orange-400"
							/>
					))}
				</div>
			</div>
		</div>
	);
}
