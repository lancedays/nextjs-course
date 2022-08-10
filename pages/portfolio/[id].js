import { useRouter } from "next/router";

export default function PortfolioDetailPage() {
  const router = useRouter();
  return (
    <div>
      <h1>This is the portfolio detail page {router.query.id}</h1>
    </div>
  );
}
