export interface UserDropdownProps {
  userName: string;
  userEmail: string;
  userRole: string;
  onProfile?: () => void;
  onLogout?: () => void;
}
