import { Zap, Gauge, ShieldCheck } from "lucide-react";
import Layout from "../components/WebsiteAudit/Layout";
import Breadcrumb from "../components/WebsiteAudit/Breadcrumb";
import AuditPageHeader from "../components/WebsiteAudit/Auditpageheader";
import AuditSearchCard from "../components/WebsiteAudit/Auditsearchcard";
import { AuditScoreCard, ScoreMetricCard } from "../components/WebsiteAudit/Auditscorecard";
import OverviewCard from "../components/WebsiteAudit/Overviewcard";
import WebsitePreviewCard from "../components/WebsiteAudit/Websitepreviewcard";
import PerformanceIssuesCard from "../components/WebsiteAudit/Performanceissuescard";
import SEOAnalysisCard from "../components/WebsiteAudit/Seoanalysiscard";
import AccessibilityCard from "../components/WebsiteAudit/Accessibilitycard";
import SecurityCheckCard from "../components/WebsiteAudit/Securitycheckcard";
import RecommendationsCard from "../components/WebsiteAudit/Recommendationscard";
import ScanInformationCard from "../components/WebsiteAudit/Scaninformationcard";
import QuickActionsCard from "../components/WebsiteAudit/Quickactionscard";

export default function WebsiteAudit() {
  return (
    <Layout activeNav="Website Audit" projectName="GrowRise">
      <div className="flex flex-col gap-6">
        <Breadcrumb items={["Projects", "GrowRise", "Website Audit"]} />
        <AuditPageHeader />
        <AuditSearchCard />

        <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1fr_360px]">
          {/* Main content column */}
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
              <AuditScoreCard />
              <ScoreMetricCard
                icon={Gauge}
                iconBg="bg-blue-500/15"
                iconColor="text-blue-400"
                title="SEO Score"
                score={94}
                status="Excellent"
                barColor="bg-purple-500"
              />
              <ScoreMetricCard
                icon={Zap}
                iconBg="bg-blue-500/15"
                iconColor="text-blue-400"
                title="Performance"
                score={91}
                status="Excellent"
                barColor="bg-blue-500"
              />
              <ScoreMetricCard
                icon={ShieldCheck}
                iconBg="bg-emerald-500/15"
                iconColor="text-emerald-400"
                title="Security"
                score={96}
                status="Excellent"
                barColor="bg-emerald-500"
              />
            </div>

            <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
              <OverviewCard />
              <WebsitePreviewCard />
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
              <PerformanceIssuesCard />
              <SEOAnalysisCard />
              <AccessibilityCard />
              <SecurityCheckCard />
            </div>
          </div>

          {/* Right sidebar column */}
          <div className="flex flex-col gap-5">
            <RecommendationsCard />
            <ScanInformationCard />
            <QuickActionsCard />
          </div>
        </div>
      </div>
    </Layout>
  );
}