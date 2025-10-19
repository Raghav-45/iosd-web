import { Achievement } from "@/types/achievements";
import { ResponsiveModal } from "../ResponsiveModal";

interface TeamModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  teams: Achievement["teams"];
}
export const TeamModal = ({
    open,
    onOpenChange,
    teams
}: TeamModalProps) => {
    return (
        <ResponsiveModal
            open={open}
            onOpenChange={onOpenChange}
            title="Teams Involved"
        >
            <div className="flex flex-col gap-4">
                {teams.map((team, index) => (
                    <div key={index} className="p-4 rounded-lg bg-gray-100 dark:bg-neutral-900">
                        <h3 className="text-lg font-semibold mb-2">{team.team_name}</h3>
                        <p className="text-neutral-700 dark:text-neutral-300">{team.position}</p>
                    </div>
                ))}
            </div>

        </ResponsiveModal>
    )
}
