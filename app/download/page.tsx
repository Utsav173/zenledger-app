import { redirect } from "next/navigation";

export const metadata = {
  title: "Download Temporal for Android",
  description:
    "Download the Temporal APK — privacy-focused, local-first personal finance with on-device AI.",
};

const APK_URL =
  "https://github.com/Utsav173/zenledger-app/raw/main/public/download/app-release.apk";

export default function DownloadPage() {
  redirect(APK_URL);
}
