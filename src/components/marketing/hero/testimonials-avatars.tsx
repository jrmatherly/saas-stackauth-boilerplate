import { Star } from "lucide-react";
import AvatarCircles from "../../ui/avatar-circles";

const avatars = [
	{
	  imageUrl: "https://avatars.githubusercontent.com/u/16860528",
	  profileUrl: "https://github.com/dillionverma",
	},
	{
	  imageUrl: "https://avatars.githubusercontent.com/u/20110627",
	  profileUrl: "https://github.com/tomonarifeehan",
	},
	{
	  imageUrl: "https://avatars.githubusercontent.com/u/106103625",
	  profileUrl: "https://github.com/BankkRoll",
	},
	{
	  imageUrl: "https://avatars.githubusercontent.com/u/59228569",
	  profileUrl: "https://github.com/safethecode",
	},
  ];
  

export function TestimonialsAvatars() {
	return (
		<div className="flex flex-col items-center justify-center gap-2 align-middle md:flex-row md:items-start">
			<AvatarCircles numPeople={99} avatarUrls={avatars} />
			<div className="flex flex-col items-center md:items-start">
				<div className="text-sm font-semibold">Loved by Founders</div>
				<div className="flex gap-1">
					{[...Array(5)].map((_, i) => (
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
