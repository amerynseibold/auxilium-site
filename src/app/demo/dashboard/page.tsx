"use client"

import { useEffect, useState } from "react"

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

import {
  Activity,
  CalendarDays,
  DollarSign,
  FileText,
  TrendingUp,
  Users,
  MoreHorizontal,
  Menu,
  X,
} from "lucide-react"

/* =========================================================
   SAMPLE DATA
========================================================= */

const revenueData = [
  { month: "Jan", revenue: 18400 },
  { month: "Feb", revenue: 22100 },
  { month: "Mar", revenue: 19800 },
  { month: "Apr", revenue: 27400 },
  { month: "May", revenue: 31600 },
  { month: "Jun", revenue: 38900 },
]

const cogsData = [
  { month: "Jan", cogs: 8200 },
  { month: "Feb", cogs: 9700 },
  { month: "Mar", cogs: 9100 },
  { month: "Apr", cogs: 11800 },
  { month: "May", cogs: 13600 },
  { month: "Jun", cogs: 15900 },
]

const serviceData = [
  { service: "Sand", yards: 1280 },
  { service: "Gravel", yards: 1640 },
  { service: "River Rock", yards: 920},
  { service: "Fill Dirt", yards: 740 },
]

const recentQuotes = [
  {
    customer: "Miller Landscape Co.",
    service: "Pea Gravel Delivery",
    status: "Approved",
    amount: "$2,840",
  },
  {
    customer: "North Ridge Homes",
    service: "Mason Sand Pickup",
    status: "Pending",
    amount: "$1,260",
  },
  {
    customer: "Cedar Creek Pools",
    service: "River Rock Delivery",
    status: "Sent",
    amount: "$3,475",
  },
  {
    customer: "Hawthorne Builders",
    service: "Fill Sand Delivery",
    status: "Paid",
    amount: "$4,120",
  },
]

const quoteManagementData = [
  {
    quoteNumber: "Q-1048",
    customer: "Miller Landscape Co.",
    service: "Pea Gravel Delivery",
    status: "Approved",
    amount: "$2,840",
    date: "Jun 18",
    owner: "J. Anderson",
  },
  {
    quoteNumber: "Q-1047",
    customer: "North Ridge Homes",
    service: "Mason Sand Pickup",
    status: "Pending",
    amount: "$1,260",
    date: "Jun 17",
    owner: "J. Anderson",
  },
  {
    quoteNumber: "Q-1046",
    customer: "Cedar Creek Pools",
    service: "River Rock Delivery",
    status: "Sent",
    amount: "$3,475",
    date: "Jun 16",
    owner: "Operations",
  },
  {
    quoteNumber: "Q-1045",
    customer: "Hawthorne Builders",
    service: "Fill Sand Delivery",
    status: "Paid",
    amount: "$4,120",
    date: "Jun 15",
    owner: "Dispatch",
  },
  {
    quoteNumber: "Q-1044",
    customer: "Oakline Outdoor Living",
    service: "Gravel Delivery",
    status: "Revision",
    amount: "$5,680",
    date: "Jun 14",
    owner: "J. Anderson",
  },
]

const customerData = [
  {
    name: "Miller Landscape Co.",
    type: "Commercial",
    quotes: 8,
    lifetimeValue: "$18,420",
    lastActivity: "Quote approved today",
    status: "Active",
  },
  {
    name: "North Ridge Homes",
    type: "Builder",
    quotes: 5,
    lifetimeValue: "$12,870",
    lastActivity: "Pending quote follow-up",
    status: "Follow-Up",
  },
  {
    name: "Cedar Creek Pools",
    type: "Contractor",
    quotes: 4,
    lifetimeValue: "$9,340",
    lastActivity: "Delivery scheduled",
    status: "Active",
  },
  {
    name: "Oakline Outdoor Living",
    type: "Residential",
    quotes: 3,
    lifetimeValue: "$6,210",
    lastActivity: "Requested revised pricing",
    status: "Needs Review",
  },
  {
    name: "Hawthorne Builders",
    type: "Builder",
    quotes: 11,
    lifetimeValue: "$26,750",
    lastActivity: "Invoice paid",
    status: "Active",
  },
]

const jobData = [
  {
    jobNumber: "J-2201",
    customer: "Miller Landscape Co.",
    service: "Pea Gravel Delivery",
    scheduledDate: "Jun 20",
    crew: "Dispatch Team A",
    status: "Scheduled",
    priority: "High",
  },
  {
    jobNumber: "J-2200",
    customer: "Cedar Creek Pools",
    service: "River Rock Delivery",
    scheduledDate: "Jun 20",
    crew: "Dispatch Team B",
    status: "In Progress",
    priority: "Normal",
  },
  {
    jobNumber: "J-2199",
    customer: "Hawthorne Builders",
    service: "Fill Sand Delivery",
    scheduledDate: "Jun 19",
    crew: "Dispatch Team A",
    status: "Completed",
    priority: "Normal",
  },
  {
    jobNumber: "J-2198",
    customer: "Oakline Outdoor Living",
    service: "Gravel Delivery",
    scheduledDate: "Jun 21",
    crew: "Pending Assignment",
    status: "Needs Review",
    priority: "High",
  },
  {
    jobNumber: "J-2197",
    customer: "North Ridge Homes",
    service: "Mason Sand Pickup",
    scheduledDate: "Jun 22",
    crew: "Customer Pickup",
    status: "Scheduled",
    priority: "Normal",
  },
]

const reportTrendData = [
  { month: "Jan", revenue: 18400, cogs: 8200 },
  { month: "Feb", revenue: 22100, cogs: 9700 },
  { month: "Mar", revenue: 19800, cogs: 9100 },
  { month: "Apr", revenue: 27400, cogs: 11800 },
  { month: "May", revenue: 31600, cogs: 13600 },
  { month: "Jun", revenue: 38900, cogs: 15900 },
]

const savedReports = [
  {
    name: "Monthly Revenue Summary",
    type: "Financial",
    updated: "Today",
    status: "Ready",
  },
  {
    name: "Quote Conversion Review",
    type: "Sales",
    updated: "Yesterday",
    status: "Ready",
  },
  {
    name: "Delivery Efficiency Snapshot",
    type: "Operations",
    updated: "2 days ago",
    status: "Ready",
  },
  {
    name: "Customer Retention Report",
    type: "Customer",
    updated: "3 days ago",
    status: "Processing",
  },
]

const fulfillmentData = [
  { name: "Delivery", value: 72 },
  { name: "Pickup", value: 28 },
]

const fulfillmentColors = ["#e5e7eb", "#3f3f46"]

/* =========================================================
   REUSABLE COMPONENTS
========================================================= */

const formatNumber = (value: number) => value.toLocaleString("en-US")

function KpiCard({
  title,
  value,
  detail,
  icon: Icon,
  trend,
  trendLabel,
  trendDirection = "up",
}: {
  title: string
  value: string
  detail: string
  icon: React.ElementType
  trend?: string
  trendLabel?: string
  trendDirection?: "up" | "down" | "neutral"
}) {
  const trendStyles =
    trendDirection === "up"
      ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-300"
      : trendDirection === "down"
      ? "border-rose-500/20 bg-rose-500/10 text-rose-300"
      : "border-zinc-500/20 bg-zinc-500/10 text-zinc-300"

  return (
    <div className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.04] p-3 shadow-lg transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] sm:p-5">
      
      <div className="flex items-center justify-between gap-2">
        <p className="truncate text-xs text-zinc-400 sm:text-sm">
          {title}
        </p>

        <Icon className="h-4 w-4 shrink-0 text-zinc-500 sm:h-5 sm:w-5" />
      </div>

      <div className="mt-3 flex items-end justify-between gap-2 sm:mt-4">
        <p className="text-xl font-semibold tracking-tight text-white sm:text-3xl">
          {value}
        </p>

        {trend && (
          <span
            className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-medium sm:px-2.5 sm:py-1 sm:text-xs ${trendStyles}`}
          >
            {trendDirection === "down"
              ? "↓"
              : trendDirection === "up"
              ? "↑"
              : "•"}{" "}
            {trend}
          </span>
        )}
      </div>

      <p className="mt-2 text-[11px] leading-4 text-zinc-500 sm:text-sm sm:leading-5">
        {detail}
      </p>

      {trendLabel && (
        <p className="mt-2 text-[10px] leading-4 text-zinc-600 sm:mt-3 sm:text-xs">
          {trendLabel}
        </p>
      )}
    </div>
  )
}

function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-medium border ${
        status === "Approved"
          ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-300"
          : status === "Pending"
          ? "border-amber-500/20 bg-amber-500/10 text-amber-300"
          : status === "Paid"
          ? "border-sky-500/20 bg-sky-500/10 text-sky-300"
          : status === "Revision"
          ? "border-purple-500/20 bg-purple-500/10 text-purple-300"
          : status === "Follow-Up"
          ? "border-orange-500/20 bg-orange-500/10 text-orange-300"
          : status === "Needs Review"
          ? "border-rose-500/20 bg-rose-500/10 text-rose-300"
          : status === "Scheduled"
          ? "border-blue-500/20 bg-blue-500/10 text-blue-300"
          : status === "In Progress"
          ? "border-yellow-500/20 bg-yellow-500/10 text-yellow-300"
          : status === "Completed"
          ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-300"
          : "border-zinc-500/20 bg-zinc-500/10 text-zinc-300"
      }`}
    >
      {status}
    </span>
  )
}

/* =========================================================
   DASHBOARD PAGE
========================================================= */

export default function DashboardDemoPage() {
  const [activeScreen, setActiveScreen] = useState("Overview")
  const [selectedCustomer, setSelectedCustomer] = useState<any>(null)
  const [selectedQuote, setSelectedQuote] = useState<any>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [chartsReady, setChartsReady] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setChartsReady(true)
    }, 500)

    return () => window.clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen bg-[#08090d] text-white">
      <div className="flex min-h-screen">
        {/* =========================
            SIDEBAR
        ========================== */}

        <aside className="hidden w-72 border-r border-white/10 bg-black/20 p-6 lg:block">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">
              Auxilium
            </p>

            <h2 className="mt-3 text-xl font-semibold">Command Center</h2>
            
            <a
              href="/"
              className="mt-4 inline-flex text-sm text-zinc-500 transition hover:text-white"
            >
              ← Back to Auxilium
            </a>
          </div>

          <nav className="mt-10 space-y-2 text-sm">
            {[
              "Overview",
              "Quotes",
              "Customers",
              "Jobs",
              "Follow-Up",
              "Reports",
            ].map((item) => (
              <button
                key={item}
                onClick={() => setActiveScreen(item)}
                className={`relative w-full rounded-xl px-4 py-3 text-left transition ${
                  activeScreen === item
                    ? "bg-white text-black shadow-lg shadow-white/10"
                    : "text-zinc-400 hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                <span className="flex items-center gap-3">
                  {activeScreen === item && (
                    <span className="h-2 w-2 rounded-full bg-black" />
                  )}

                  {item}
                </span>
              </button>
            ))}
          </nav>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <p className="text-sm font-medium text-white">
              Dashboard Highlights
            </p>

            <div className="mt-4 space-y-3 text-sm text-zinc-400">
              <p>• Quote & pipeline tracking</p>
              <p>• Customer management workflows</p>
              <p>• Operational reporting views</p>
              <p>• Mobile-responsive UI system</p>
              <p>• Interactive management screens</p>
            </div>
          </div>
        </aside>

        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden">
            <div className="h-full w-80 border-r border-white/10 bg-[#0d0f14] p-6 shadow-2xl">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">
                    Auxilium
                  </p>
                  <h2 className="mt-3 text-xl font-semibold">Command Center</h2>
                  <a
                    href="/"
                    className="mt-4 inline-flex text-sm text-zinc-500 transition hover:text-white"
                  >
                    ← Back to Auxilium
                  </a>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl border border-white/10 bg-white/[0.04] p-2 text-zinc-300"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="mt-10 space-y-2 text-sm">
                {[
                  "Overview",
                  "Quotes",
                  "Customers",
                  "Jobs",
                  "Follow-Up",
                  "Reports",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setActiveScreen(item)
                      setMobileMenuOpen(false)
                    }}
                    className={`relative w-full rounded-xl px-4 py-3 text-left transition ${
                      activeScreen === item
                        ? "bg-white text-black shadow-lg shadow-white/10"
                        : "text-zinc-400 hover:bg-white/[0.06] hover:text-white"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      {activeScreen === item && (
                        <span className="h-2 w-2 rounded-full bg-black" />
                      )}

                      {item}
                    </span>
                  </button>
                ))}
              </nav>
            </div>
          </div>
        )}

        {/* =========================
            MAIN CONTENT
        ========================== */}

        <section className="mx-auto w-full max-w-7xl px-6 py-8">
          {/* =========================
              TOP UTILITY BAR
          ========================== */}

          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center justify-between lg:hidden">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                  Auxilium
                </p>
                <p className="mt-1 font-semibold text-white">Command Center</p>
              </div>

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-zinc-300"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search customers, quotes, jobs..."
                className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition-all duration-300 focus:border-white/20"
              />
            </div>

            <div className="flex items-center gap-3">
              <button className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-zinc-300 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]">
                Export Report
              </button>

              <button className="rounded-xl bg-white px-4 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-zinc-200">
                New Quote
              </button>

              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sm font-medium">
                AS
              </div>
            </div>
          </div>

          <div className="mb-8 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-zinc-300">
            <span className="font-medium">Demo Mode:</span>{" "}
            This dashboard uses sample data to showcase how Auxilium can organize quotes,
            customers, jobs, reporting, and operational workflows for service-based
            businesses.
          </div>

          {/* =====================================================
              OVERVIEW SCREEN
          ====================================================== */}

          {activeScreen === "Overview" && (
            <>
              {/* =========================
                  OVERVIEW HEADER
              ========================== */}

              <div className="flex flex-col gap-4 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                    Auxilium Demo
                  </p>

                  <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                    Operations Command Center
                  </h1>

                  <p className="mt-4 max-w-2xl text-zinc-400">
                    A real-time dashboard concept for service businesses to
                    monitor quote volume, revenue, job activity, and customer
                    follow-up.
                  </p>
                </div>

                <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-400">
                  Last 6 months
                </div>
              </div>

              {/* =========================
                  KPI SUMMARY CARDS
                  Mobile: 2-column compact layout
                  Desktop: unchanged
              ========================== */}

              <div className="mt-8 grid grid-cols-[repeat(2,minmax(0,1fr))] gap-3 md:gap-4 xl:grid-cols-4">
                <KpiCard
                  title="Revenue"
                  value="$158.2K"
                  detail="+18.4% from previous period"
                  trend="18.4%"
                  trendLabel="Compared to prior 6 months"
                  trendDirection="up"
                  icon={DollarSign}
                />

                <KpiCard
                  title="Quotes Sent"
                  value="186"
                  detail="42 awaiting customer response"
                  trend="12.1%"
                  trendLabel="Quote volume increased"
                  trendDirection="up"
                  icon={FileText}
                />

                <KpiCard
                  title="Conversion Rate"
                  value="64%"
                  detail="Approved quote ratio"
                  trend="3.2%"
                  trendLabel="Slight improvement in approvals"
                  trendDirection="up"
                  icon={TrendingUp}
                />

                <KpiCard
                  title="Active Customers"
                  value="73"
                  detail="Across residential and commercial"
                  trend="8"
                  trendLabel="New active accounts"
                  trendDirection="up"
                  icon={Users}
                />
              </div>

              {/* =========================
                  CHART GRID
                  Left column = financial trends
                  Right column = operational mix charts
              ========================== */}

              <div className="mt-6 grid min-w-0 gap-6 xl:grid-cols-[2fr_1fr]">
                {/* =========================
                    LEFT COLUMN: FINANCIAL TRENDS
                ========================== */}

                <div className="space-y-6">
                  {/* Revenue Trend */}
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-lg transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]">
                    <div className="mb-6 flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <h2 className="text-lg font-semibold">
                            Revenue Trend
                          </h2>

                          <div className="flex items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-emerald-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Live
                          </div>
                        </div>

                        <p className="mt-1 text-sm text-zinc-500">
                          Monthly quoted and approved revenue • Updated 2 min ago
                        </p>
                      </div>

                      <Activity className="h-5 w-5 text-zinc-500" />
                    </div>

                    <div className="h-72 min-h-[288px] min-w-0">
                      {chartsReady && (
                        <ResponsiveContainer
                          width="100%"
                          height="100%"
                          minWidth={0}
                        >
                          <LineChart
                            data={revenueData}
                            margin={{ top: 10, right: 10, left: -10, bottom: 10 }}
                          >
                            <XAxis
                              dataKey="month"
                              stroke="#71717a"
                              tickLine={false}
                              axisLine={false}
                              tick={{ fontSize: 13 }}
                            />

                            <YAxis
                              stroke="#71717a"
                              tickLine={false}
                              axisLine={false}
                              tick={{ fontSize: 12 }}
                              tickFormatter={(value) => formatNumber(Number(value))}
                            />

                            <Tooltip
                              formatter={(value) => [`$${formatNumber(Number(value))}`, "Amount"]}
                              contentStyle={{
                                backgroundColor: "#111318",
                                border: "1px solid rgba(255,255,255,0.08)",
                                borderRadius: "12px",
                                color: "#fff",
                              }}
                              cursor={{ stroke: "rgba(255,255,255,0.08)" }}
                            />

                            <Line
                              type="monotone"
                              dataKey="revenue"
                              stroke="#e5e7eb"
                              strokeWidth={3}
                              dot={false}
                              activeDot={{ r: 5 }}
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      )}
                    </div>
                  </div>

                  {/* COGS Trend */}
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-lg transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]">
                    <div className="mb-6 flex items-center justify-between">
                      <div>
                        <h2 className="text-lg font-semibold">COGS Trend</h2>
                        <p className="text-sm text-zinc-500">
                          Estimated material, delivery, and operating costs
                        </p>
                      </div>

                      <TrendingUp className="h-5 w-5 text-zinc-500" />
                    </div>

                    <div className="h-64 min-h-[256px] min-w-0">
                      {chartsReady && (
                        <ResponsiveContainer
                          width="100%"
                          height="100%"
                          minWidth={0}
                        >
                          <LineChart
                            data={cogsData}
                            margin={{ top: 10, right: 10, left: -10, bottom: 10 }}
                          >
                            <XAxis
                              dataKey="month"
                              stroke="#71717a"
                              tickLine={false}
                              axisLine={false}
                              tick={{ fontSize: 13 }}
                            />

                            <YAxis
                              stroke="#71717a"
                              tickLine={false}
                              axisLine={false}
                              tick={{ fontSize: 12 }}
                              tickFormatter={(value) => formatNumber(Number(value))}
                            />

                            <Tooltip
                              formatter={(value) => [`$${formatNumber(Number(value))}`, "Amount"]}
                              contentStyle={{
                                backgroundColor: "#111318",
                                border: "1px solid rgba(255,255,255,0.08)",
                                borderRadius: "12px",
                                color: "#fff",
                              }}
                              cursor={{ stroke: "rgba(255,255,255,0.08)" }}
                            />

                            <Line
                              type="monotone"
                              dataKey="cogs"
                              stroke="#a1a1aa"
                              strokeWidth={3}
                              dot={false}
                              activeDot={{ r: 5 }}
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      )}
                    </div>
                  </div>
                </div>

                {/* =========================
                    RIGHT COLUMN: OPERATIONAL MIX
                ========================== */}

                <div className="space-y-6">
                  {/* Product Mix */}
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-lg transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]">
                    <div className="mb-6 flex items-center justify-between">
                      <div>
                        <h2 className="text-lg font-semibold">Product Mix</h2>
                        <p className="text-sm text-zinc-500">
                          Volume by material type
                        </p>
                      </div>

                      <CalendarDays className="h-5 w-5 text-zinc-500" />
                    </div>

                    <div className="h-72 min-h-[288px] min-w-0">
                      {chartsReady && (
                        <ResponsiveContainer
                          width="100%"
                          height="100%"
                          minWidth={0}
                        >
                          <BarChart
                            data={serviceData}
                            margin={{ top: 10, right: 10, left: -10, bottom: 10 }}
                            barCategoryGap="22%"
                          >
                            <XAxis
                              dataKey="service"
                              stroke="#71717a"
                              tickLine={false}
                              axisLine={false}
                              tick={{ fontSize: 13 }}
                            />

                            <YAxis
                              stroke="#71717a"
                              tickLine={false}
                              axisLine={false}
                              tick={{ fontSize: 12 }}
                              tickFormatter={(value) => formatNumber(Number(value))}
                            />

                            <Tooltip
                              contentStyle={{
                                backgroundColor: "#111318",
                                border: "1px solid rgba(255,255,255,0.08)",
                                borderRadius: "12px",
                                color: "#fff",
                              }}
                              cursor={{ fill: "rgba(255,255,255,0.04)" }}
                            />

                            <Bar
                              dataKey="yards"
                              fill="#e5e7eb"
                              radius={[10, 10, 0, 0]}
                            />
                          </BarChart>
                        </ResponsiveContainer>
                      )}
                    </div>
                  </div>

                  {/* Fulfillment Mix */}
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-lg transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]">
                    <div className="mb-6 flex items-center justify-between">
                      <div>
                        <h2 className="text-lg font-semibold">
                          Fulfillment Mix
                        </h2>

                        <p className="text-sm text-zinc-500">
                          Delivery vs. pickup requests
                        </p>
                      </div>

                      <CalendarDays className="h-5 w-5 text-zinc-500" />
                    </div>

                    <div className="flex flex-col items-center justify-center">
                      <div className="h-56 w-full">
                        {chartsReady && (
                          <ResponsiveContainer
                            width="100%"
                            height="100%"
                            minWidth={0}
                          >
                            <PieChart>
                              <Tooltip
                                formatter={(value, name) => [`${value}%`, name]}
                                contentStyle={{
                                  backgroundColor: "#111318",
                                  border: "1px solid rgba(255,255,255,0.08)",
                                  borderRadius: "12px",
                                  color: "#fff",
                                  fontSize: "13px",
                                }}
                                labelStyle={{ color: "#fff" }}
                                itemStyle={{ color: "#fff" }}
                              />

                              <Pie
                                data={fulfillmentData}
                                cx="50%"
                                cy="50%"
                                innerRadius={50}
                                outerRadius={75}
                                paddingAngle={4}
                                dataKey="value"
                              >
                                {fulfillmentData.map((entry, index) => (
                                  <Cell
                                    key={`cell-${index}`}
                                    fill={fulfillmentColors[index % fulfillmentColors.length]}
                                  />
                                ))}
                              </Pie>
                            </PieChart>
                          </ResponsiveContainer>
                        )}
                      </div>

                      <div className="mt-2 flex gap-6 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 rounded-full bg-zinc-200" />
                          <span className="text-zinc-400">Delivery 72%</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 rounded-full bg-zinc-700" />
                          <span className="text-zinc-400">Pickup 28%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* =========================
                  OPERATIONAL SNAPSHOT CARDS
              ========================== */}

              <div className="mt-6 grid gap-6 xl:grid-cols-[2fr_1fr_1fr]">
                {/* Quote Pipeline */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-lg transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]">
                  <h2 className="text-lg font-semibold">Quote Pipeline</h2>
                  <p className="mt-1 text-sm text-zinc-500">
                    Current status of active opportunities.
                  </p>

                  <div className="mt-5 space-y-4">
                    {[
                      { label: "Requested", value: 24, width: "w-[72%]" },
                      { label: "Sent", value: 18, width: "w-[58%]" },
                      { label: "Approved", value: 12, width: "w-[44%]" },
                      { label: "Paid", value: 9, width: "w-[32%]" },
                    ].map((item) => (
                      <div key={item.label}>
                        <div className="mb-2 flex items-center justify-between text-sm">
                          <span className="text-zinc-400">{item.label}</span>
                          <span className="font-medium text-white">
                            {item.value}
                          </span>
                        </div>

                        <div className="h-2 rounded-full bg-white/10">
                          <div
                            className={`${item.width} h-2 rounded-full bg-zinc-200`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Follow-Up Queue */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-lg transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]">
                  <h2 className="text-lg font-semibold">Follow-Up Queue</h2>
                  <p className="mt-1 text-sm text-zinc-500">
                    Quotes that may need attention.
                  </p>

                  <div className="mt-5 space-y-3">
                    {[
                      "6 quotes awaiting response over 5 days",
                      "3 high-value commercial quotes pending",
                      "4 delivery requests missing schedule date",
                      "2 customers requested revised pricing",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-zinc-300"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Owner Insights */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-lg transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]">
                  <h2 className="text-lg font-semibold">Owner Insights</h2>
                  <p className="mt-1 text-sm text-zinc-500">
                    Practical signals pulled from daily activity.
                  </p>

                  <div className="mt-5 space-y-4">
                    <div>
                      <p className="text-sm text-zinc-400">
                        Top revenue driver
                      </p>
                      <p className="mt-1 text-xl font-semibold text-white">
                        Gravel Delivery
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-zinc-400">
                        Most delayed step
                      </p>
                      <p className="mt-1 text-xl font-semibold text-white">
                        Customer Follow-Up
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-zinc-400">
                        Suggested action
                      </p>
                      <p className="mt-1 text-sm leading-6 text-zinc-300">
                        Prioritize pending commercial quotes before new
                        low-value requests are assigned.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* =========================
                  LIVE ACTIVITY FEED
              ========================== */}

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-lg transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-semibold">
                      Live Operational Activity
                    </h2>

                    <p className="mt-1 text-sm text-zinc-500">
                      Recent quote, scheduling, and customer actions.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-emerald-400">
                    <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    Live
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {[
                    {
                      action: "New commercial delivery request submitted",
                      customer: "North Ridge Development",
                      time: "2 min ago",
                    },
                    {
                      action: "Quote approved by customer",
                      customer: "Miller Landscape Co.",
                      time: "11 min ago",
                    },
                    {
                      action: "Delivery route scheduled",
                      customer: "Cedar Creek Pools",
                      time: "27 min ago",
                    },
                    {
                      action: "Customer requested revised pricing",
                      customer: "Oakline Outdoor Living",
                      time: "42 min ago",
                    },
                  ].map((item) => (
                    <div
                      key={item.customer}
                      className="flex items-start justify-between rounded-xl border border-white/10 bg-black/20 px-4 py-4"
                    >
                      <div>
                        <p className="font-medium text-white">
                          {item.action}
                        </p>

                        <p className="mt-1 text-sm text-zinc-500">
                          {item.customer}
                        </p>
                      </div>

                      <p className="text-sm text-zinc-500">{item.time}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* =========================
                  RECENT QUOTE ACTIVITY TABLE
              ========================== */}

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-lg transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]">
                <div className="mb-5">
                  <h2 className="text-lg font-semibold">
                    Recent Quote Activity
                  </h2>
                  <p className="text-sm text-zinc-500">
                    Live operational snapshot of customer requests and quote
                    status.
                  </p>
                </div>

                <div className="overflow-hidden rounded-xl border border-white/10">
                  <table className="w-full text-left text-sm">
                    <thead className="sticky top-0 z-10 bg-[#111318] text-zinc-400 backdrop-blur">
                      <tr>
                        <th className="px-4 py-3 font-medium">Customer</th>
                        <th className="px-4 py-3 font-medium">Service</th>
                        <th className="px-4 py-3 font-medium">Status</th>
                        <th className="px-4 py-3 text-right font-medium">
                          Amount
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {recentQuotes.map((quote) => (
                        <tr
                          key={quote.customer}
                          className="group cursor-pointer border-t border-white/10 text-zinc-300 transition hover:bg-white/[0.03]"
                        >
                          <td className="px-4 py-4">
                            <div className="flex items-center justify-between gap-4">
                              <span className="font-medium text-white">
                                {quote.customer}
                              </span>

                              <span className="text-xs font-medium text-blue-400 opacity-0 transition group-hover:opacity-100">
                                View →
                              </span>
                            </div>  
                          </td>
                          <td className="px-4 py-4 text-zinc-400">
                            {quote.service}
                          </td>
                          <td className="px-4 py-4">
                            <StatusBadge status={quote.status} />
                          </td>
                          <td className="px-4 py-4 text-right font-medium text-white">
                            {quote.amount}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {/* =====================================================
              QUOTES SCREEN
          ====================================================== */}

          {activeScreen === "Quotes" && (
            <div>
              <div className="flex flex-col gap-4 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                    Quote Management
                  </p>

                  <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                    Active Quotes
                  </h1>

                  <p className="mt-4 max-w-2xl text-zinc-400">
                    Monitor quote progress, customer activity, revisions,
                    approvals, and operational follow-up.
                  </p>
                </div>

                <button className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-200">
                  Create Quote
                </button>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {["All", "Pending", "Approved", "Paid", "Revision"].map(
                  (filter) => (
                    <button
                      key={filter}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.06]"
                    >
                      {filter}
                    </button>
                  )
                )}
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-lg">
               <div className="max-h-[650px] overflow-auto">
                <table className="w-full text-left text-sm">
                  <thead className="sticky top-0 z-10 bg-[#111318] text-zinc-400 backdrop-blur">
                    <tr>
                      <th className="px-5 py-4 font-medium">Quote #</th>
                      <th className="px-5 py-4 font-medium">Customer</th>
                      <th className="px-5 py-4 font-medium">Service</th>
                      <th className="px-5 py-4 font-medium">Status</th>
                      <th className="px-5 py-4 font-medium">Owner</th>
                      <th className="px-5 py-4 font-medium">Date</th>
                      <th className="px-5 py-4 text-right font-medium">
                        Amount
                      </th>
                      <th className="px-5 py-4 text-right font-medium"></th>
                    </tr>
                  </thead>

                  <tbody>
                    {quoteManagementData.map((quote) => (
                      <tr
                        key={quote.quoteNumber}
                        onClick={() => setSelectedQuote(quote)}
                        className="cursor-pointer border-t border-white/10 text-zinc-300 transition hover:bg-white/[0.03]"
                      >
                        <td className="px-5 py-5 font-medium text-white">
                          {quote.quoteNumber}
                        </td>

                        <td className="px-5 py-5">{quote.customer}</td>

                        <td className="px-5 py-5 text-zinc-400">
                          {quote.service}
                        </td>

                        <td className="px-5 py-5">
                          <StatusBadge status={quote.status} />
                        </td>

                        <td className="px-5 py-5 text-zinc-400">
                          {quote.owner}
                        </td>

                        <td className="px-5 py-5 text-zinc-400">
                          {quote.date}
                        </td>

                        <td className="px-5 py-5 text-right font-medium text-white">
                          {quote.amount}
                        </td>

                        <td className="px-5 py-5 text-right">
                          <button className="rounded-lg p-2 text-zinc-500 transition hover:bg-white/[0.06] hover:text-white">
                            <MoreHorizontal className="h-5 w-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                </div>
              </div>
              {/* =========================
                  QUOTE DETAIL DRAWER
              ========================== */}

              {selectedQuote && (
                <div
                  className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm"
                  onClick={() => setSelectedQuote(null)}
                >

                  {/* Drawer */}
                  <div
                    className="h-full w-full max-w-xl overflow-y-auto border-l border-white/10 bg-[#0d0f14] p-8 shadow-2xl"
                    onClick={(event) => event.stopPropagation()}
                  >

                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                          Quote Detail
                        </p>

                        <h2 className="mt-3 text-3xl font-semibold text-white">
                          {selectedQuote.quoteNumber}
                        </h2>

                        <p className="mt-2 text-zinc-400">
                          {selectedQuote.customer}
                        </p>
                      </div>

                      <button
                        onClick={() => setSelectedQuote(null)}
                        className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.06]"
                      >
                        Close
                      </button>
                    </div>

                    {/* Status */}
                    <div className="mt-8">
                      <p className="mb-3 text-sm text-zinc-500">
                        Quote Status
                      </p>

                      <StatusBadge status={selectedQuote.status} />
                    </div>

                    {/* Quote Metrics */}
                    <div className="mt-8 grid grid-cols-2 gap-4">

                      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                        <p className="text-sm text-zinc-500">
                          Quote Amount
                        </p>

                        <p className="mt-2 text-2xl font-semibold text-white">
                          {selectedQuote.amount}
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                        <p className="text-sm text-zinc-500">
                          Assigned Owner
                        </p>

                        <p className="mt-2 text-2xl font-semibold text-white">
                          {selectedQuote.owner}
                        </p>
                      </div>

                    </div>

                    {/* Services */}
                    <div className="mt-8">
                      <h3 className="text-lg font-semibold text-white">
                        Scope of Work
                      </h3>

                      <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                        <div className="flex items-center justify-between border-b border-white/10 pb-4">
                          <div>
                            <p className="font-medium text-white">
                              {selectedQuote.service}
                            </p>

                            <p className="mt-1 text-sm text-zinc-500">
                              Estimated materials and delivery included
                            </p>
                          </div>

                          <p className="font-semibold text-white">
                            {selectedQuote.amount}
                          </p>
                        </div>

                        <div className="mt-4 flex items-center justify-between text-sm text-zinc-400">
                          <span>Tax & Fees</span>
                          <span>Included</span>
                        </div>
                      </div>
                    </div>

                    {/* Timeline */}
                    <div className="mt-8">
                      <h3 className="text-lg font-semibold text-white">
                        Activity Timeline
                      </h3>

                      <div className="mt-5 space-y-4">

                        {[
                          "Quote created and submitted",
                          "Customer requested delivery adjustment",
                          "Operations reviewed pricing",
                          "Awaiting customer approval",
                        ].map((event) => (
                          <div
                            key={event}
                            className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4"
                          >
                            <div className="mt-1 h-2 w-2 rounded-full bg-white" />

                            <div>
                              <p className="text-sm text-white">
                                {event}
                              </p>

                              <p className="mt-1 text-xs text-zinc-500">
                                Recent activity
                              </p>
                            </div>
                          </div>
                        ))}

                      </div>
                    </div>

                  </div>
                </div>
              )}                    
            </div>
          )}

        {/* =====================================================
              CUSTOMERS SCREEN
          ====================================================== */}

          {activeScreen === "Customers" && (
            <div>
              <div className="flex flex-col gap-4 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                    Customer Intelligence
                  </p>

                  <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                    Customer Accounts
                  </h1>

                  <p className="mt-4 max-w-2xl text-zinc-400">
                    Track customer activity, quote history, account value, and
                    follow-up needs from one operational view.
                  </p>
                </div>

                <button className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-200">
                  Add Customer
                </button>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <KpiCard
                  title="Total Customers"
                  value="73"
                  detail="18 commercial accounts"
                  icon={Users}
                />

                <KpiCard
                  title="Repeat Customers"
                  value="41%"
                  detail="Customers with 2+ quotes"
                  icon={TrendingUp}
                />

                <KpiCard
                  title="Follow-Ups Due"
                  value="12"
                  detail="Require customer outreach"
                  icon={FileText}
                />
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-lg">
               <div className="max-h-[650px] overflow-auto">
                <table className="w-full text-left text-sm">
                  <thead className="sticky top-0 z-10 bg-[#111318] text-zinc-400 backdrop-blur">
                    <tr>
                      <th className="px-5 py-4 font-medium">Customer</th>
                      <th className="px-5 py-4 font-medium">Type</th>
                      <th className="px-5 py-4 font-medium">Quotes</th>
                      <th className="px-5 py-4 font-medium">Lifetime Value</th>
                      <th className="px-5 py-4 font-medium">Last Activity</th>
                      <th className="px-5 py-4 font-medium">Status</th>
                      <th className="px-5 py-4 text-right font-medium"></th>
                    </tr>
                  </thead>

                  <tbody>
                    {customerData.map((customer) => (
                      <tr
                        key={customer.name}
                        onClick={() => setSelectedCustomer(customer)}
                        className="cursor-pointer border-t border-white/10 text-zinc-300 transition hover:bg-white/[0.03]"
                        >
                        <td className="px-5 py-5 font-medium text-white">
                          {customer.name}
                        </td>

                        <td className="px-5 py-5 text-zinc-400">
                          {customer.type}
                        </td>

                        <td className="px-5 py-5">{customer.quotes}</td>

                        <td className="px-5 py-5 font-medium text-white">
                          {customer.lifetimeValue}
                        </td>

                        <td className="px-5 py-5 text-zinc-400">
                          {customer.lastActivity}
                        </td>

                        <td className="px-5 py-5">
                          <StatusBadge status={customer.status} />
                        </td>

                        <td className="px-5 py-5 text-right">
                          <button className="rounded-lg p-2 text-zinc-500 transition hover:bg-white/[0.06] hover:text-white">
                            <MoreHorizontal className="h-5 w-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                </div>
              </div>
              {/* =========================
                  CUSTOMER DETAIL DRAWER
              ========================== */}

              {selectedCustomer && (
                <div
                className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm transition-opacity duration-300"
                onClick={() => setSelectedCustomer(null)}
                >

                  {/* Drawer Panel */}
                  <div
                    className="h-full w-full max-w-xl translate-x-0 overflow-y-auto border-l border-white/10 bg-[#0d0f14] p-8 shadow-2xl transition-transform duration-300 ease-out"
                    onClick={(event) => event.stopPropagation()}
                  >

                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                          Customer Detail
                        </p>

                        <h2 className="mt-3 text-3xl font-semibold text-white">
                          {selectedCustomer.name}
                        </h2>

                        <p className="mt-2 text-zinc-400">
                          {selectedCustomer.type} Account
                        </p>
                      </div>

                      <button
                        onClick={() => setSelectedCustomer(null)}
                        className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.06]"
                      >
                        Close
                      </button>
                    </div>

                    {/* Metrics */}
                    <div className="mt-8 grid grid-cols-2 gap-4">

                      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                        <p className="text-sm text-zinc-500">
                          Lifetime Value
                        </p>

                        <p className="mt-2 text-2xl font-semibold text-white">
                          {selectedCustomer.lifetimeValue}
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                        <p className="text-sm text-zinc-500">
                          Total Quotes
                        </p>

                        <p className="mt-2 text-2xl font-semibold text-white">
                          {selectedCustomer.quotes}
                        </p>
                      </div>

                    </div>

                    {/* Status */}
                    <div className="mt-8">
                      <p className="mb-3 text-sm text-zinc-500">
                        Account Status
                      </p>

                      <StatusBadge status={selectedCustomer.status} />
                    </div>

                    {/* Notes */}
                    <div className="mt-8">
                      <h3 className="text-lg font-semibold text-white">
                        Operational Notes
                      </h3>

                      <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                        <p className="leading-7 text-zinc-300">
                          Customer has been highly responsive and frequently
                          requests expedited delivery scheduling. Opportunity
                          exists for recurring commercial partnership and
                          preferred pricing structure.
                        </p>
                      </div>
                    </div>

                    {/* Timeline */}
                    <div className="mt-8">
                      <h3 className="text-lg font-semibold text-white">
                        Recent Activity
                      </h3>

                      <div className="mt-5 space-y-4">

                        {[
                          "Quote approved for gravel delivery",
                          "Customer requested revised estimate",
                          "Dispatch team scheduled delivery",
                          "Invoice payment received",
                        ].map((event) => (
                          <div
                            key={event}
                            className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4"
                          >
                            <div className="mt-1 h-2 w-2 rounded-full bg-white" />

                            <div>
                              <p className="text-sm text-white">
                                {event}
                              </p>

                              <p className="mt-1 text-xs text-zinc-500">
                                Within last 30 days
                              </p>
                            </div>
                          </div>
                        ))}

                      </div>
                    </div>

                  </div>
                </div>
              )}
            </div>
          )}

          {/* =====================================================
              JOBS SCREEN
          ====================================================== */}

          {activeScreen === "Jobs" && (
            <div>
              <div className="flex flex-col gap-4 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                    Job Operations
                  </p>

                  <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                    Scheduled Jobs
                  </h1>

                  <p className="mt-4 max-w-2xl text-zinc-400">
                    Track scheduled deliveries, crew assignments, completion
                    status, and operational issues from one dispatch-ready view.
                  </p>
                </div>

                <button className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-200">
                  Schedule Job
                </button>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <KpiCard
                  title="Jobs Scheduled"
                  value="28"
                  detail="Next 7 operating days"
                  icon={CalendarDays}
                />

                <KpiCard
                  title="In Progress"
                  value="6"
                  detail="Currently assigned to crews"
                  icon={Activity}
                />

                <KpiCard
                  title="Needs Review"
                  value="3"
                  detail="Missing schedule or crew detail"
                  icon={FileText}
                />
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-lg">
               <div className="max-h-[650px] overflow-auto">
                <table className="w-full text-left text-sm">
                  <thead className="sticky top-0 z-10 bg-[#111318] text-zinc-400 backdrop-blur">
                    <tr>
                      <th className="px-5 py-4 font-medium">Job #</th>
                      <th className="px-5 py-4 font-medium">Customer</th>
                      <th className="px-5 py-4 font-medium">Service</th>
                      <th className="px-5 py-4 font-medium">Scheduled</th>
                      <th className="px-5 py-4 font-medium">Crew</th>
                      <th className="px-5 py-4 font-medium">Priority</th>
                      <th className="px-5 py-4 font-medium">Status</th>
                      <th className="px-5 py-4 text-right font-medium"></th>
                    </tr>
                  </thead>

                  <tbody>
                    {jobData.map((job) => (
                      <tr
                        key={job.jobNumber}
                        className="border-t border-white/10 text-zinc-300 transition hover:bg-white/[0.03]"
                      >
                        <td className="px-5 py-5 font-medium text-white">
                          {job.jobNumber}
                        </td>

                        <td className="px-5 py-5">{job.customer}</td>

                        <td className="px-5 py-5 text-zinc-400">
                          {job.service}
                        </td>

                        <td className="px-5 py-5 text-zinc-400">
                          {job.scheduledDate}
                        </td>

                        <td className="px-5 py-5 text-zinc-400">
                          {job.crew}
                        </td>

                        <td className="px-5 py-5">
                          <span
                            className={`rounded-full border px-3 py-1 text-xs font-medium ${
                              job.priority === "High"
                                ? "border-rose-500/20 bg-rose-500/10 text-rose-300"
                                : "border-zinc-500/20 bg-zinc-500/10 text-zinc-300"
                            }`}
                          >
                            {job.priority}
                          </span>
                        </td>

                        <td className="px-5 py-5">
                          <StatusBadge status={job.status} />
                        </td>

                        <td className="px-5 py-5 text-right">
                          <button className="rounded-lg p-2 text-zinc-500 transition hover:bg-white/[0.06] hover:text-white">
                            <MoreHorizontal className="h-5 w-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                </div>
              </div>
            </div>
          )}

          {/* =====================================================
              FOLLOW-UP SCREEN
          ====================================================== */}


          {activeScreen === "Follow-Up" && (
            <div>
              <div className="border-b border-white/10 pb-8">
                <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                  Follow-Up Management
                </p>

                <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                  Follow-Up Queue
                </h1>

                <p className="mt-4 max-w-2xl text-zinc-400">
                  Prioritize open quotes, delayed responses, revised pricing requests,
                  and customer outreach before opportunities go cold.
                </p>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <KpiCard title="Due Today" value="8" detail="Require outreach" icon={FileText} />
                <KpiCard title="High Value" value="3" detail="Commercial opportunities" icon={DollarSign} />
                <KpiCard title="Overdue" value="5" detail="Past recommended follow-up" icon={Activity} />
              </div>

              <div className="mt-6 grid gap-4">
                {[
                  "Call North Ridge Homes about pending mason sand quote.",
                  "Send revised gravel delivery pricing to Oakline Outdoor Living.",
                  "Confirm delivery window with Cedar Creek Pools.",
                  "Follow up on commercial bid with Miller Landscape Co.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-zinc-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* =====================================================
              REPORTS SCREEN
          ====================================================== */}

          {activeScreen === "Reports" && (
            <div>
              {/* =========================
                  REPORTS HEADER
              ========================== */}

              <div className="flex flex-col gap-4 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                    Business Reporting
                  </p>

                  <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                    Reports
                  </h1>

                  <p className="mt-4 max-w-2xl text-zinc-400">
                    Turn quote, customer, job, and financial activity into
                    practical performance visibility for owners and operators.
                  </p>
                </div>

                <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-400">
                  Updated automatically every 15 minutes
                </div>
              </div>

              {/* =========================
                  REPORT KPI CARDS
              ========================== */}

              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <KpiCard
                  title="Monthly Revenue"
                  value="$38.9K"
                  detail="June performance"
                  icon={DollarSign}
                />

                <KpiCard
                  title="Gross Margin"
                  value="59%"
                  detail="Revenue less estimated COGS"
                  icon={TrendingUp}
                />

                <KpiCard
                  title="Avg Job Size"
                  value="$2,180"
                  detail="Across active jobs"
                  icon={FileText}
                />

                <KpiCard
                  title="Repeat Customers"
                  value="41%"
                  detail="Customers with 2+ quotes"
                  icon={Users}
                />
              </div>

              {/* =========================
                  FINANCIAL PERFORMANCE CHART
              ========================== */}

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-lg transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-semibold">
                      Revenue vs. COGS
                    </h2>

                    <p className="text-sm text-zinc-500">
                      Monthly revenue compared against estimated operating cost.
                    </p>
                  </div>

                  <Activity className="h-5 w-5 text-zinc-500" />
                </div>

                <div className="h-80 min-h-[320px] min-w-0">
                  {chartsReady && (
                    <ResponsiveContainer width="100%" height="100%" minWidth={0}>
                      <LineChart
                        data={reportTrendData}
                        margin={{ top: 10, right: 10, left: -10, bottom: 10 }}
                      >
                        <XAxis
                          dataKey="month"
                          stroke="#71717a"
                          tickLine={false}
                          axisLine={false}
                          tick={{ fontSize: 13 }}
                        />

                        <YAxis
                          stroke="#71717a"
                          tickLine={false}
                          axisLine={false}
                          tick={{ fontSize: 12 }}
                          tickFormatter={(value) =>
                            formatNumber(Number(value))
                          }
                        />

                        <Tooltip
                          itemSorter={(item) => {
                            if (item.dataKey === "revenue") return -1
                            if (item.dataKey === "cogs") return 1
                            return 0
                          }}
                          formatter={(value, name) => [
                            `$${formatNumber(Number(value))}`,
                            name === "revenue" ? "Revenue" : "COGS",
                          ]}
                          labelFormatter={(label, payload) => {
                            if (!payload || payload.length < 2) return ""

                            const revenue =
                              payload.find((p) => p.dataKey === "revenue")?.value ?? 0

                            const cogs =
                              payload.find((p) => p.dataKey === "cogs")?.value ?? 0

                            const margin = Math.round(
                              ((Number(revenue) - Number(cogs)) / Number(revenue)) * 100
                            )

                            return `Margin ${margin}%`
                          }}
                          contentStyle={{
                            backgroundColor: "#111318",
                            border: "1px solid rgba(255,255,255,0.08)",
                            borderRadius: "12px",
                            color: "#fff",
                            fontSize: "13px",
                          }}
                          labelStyle={{
                            color: "#fff",
                            fontWeight: 600,
                            marginBottom: "6px",
                          }}
                          itemStyle={{ color: "#fff" }}
                          cursor={{ stroke: "rgba(255,255,255,0.08)" }}
                        />

                        <Line
                          type="monotone"
                          dataKey="cogs"
                          stroke="#71717a"
                          strokeWidth={3}
                          dot={false}
                          activeDot={{ r: 5 }}
                        />

                        <Line
                          type="monotone"
                          dataKey="revenue"
                          stroke="#e5e7eb"
                          strokeWidth={3}
                          dot={false}
                          activeDot={{ r: 5 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  )}
                </div>
              </div>

              {/* =========================
                  INSIGHTS + REPORT LIBRARY
              ========================== */}

              <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_2fr]">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-lg transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]">
                  <h2 className="text-lg font-semibold">
                    Generated Insights
                  </h2>

                  <p className="mt-1 text-sm text-zinc-500">
                    Practical takeaways from recent operational activity.
                  </p>

                  <div className="mt-5 space-y-4">
                    {[
                      "Gravel deliveries generated the highest revenue contribution this period.",
                      "COGS increased in June, but margin remained healthy due to larger job size.",
                      "Repeat customers are driving a meaningful share of approved quotes.",
                      "Follow-up delays remain the largest visible conversion risk.",
                    ].map((insight) => (
                      <div
                        key={insight}
                        className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm leading-6 text-zinc-300"
                      >
                        {insight}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-lg transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]">
                  <div className="mb-5">
                    <h2 className="text-lg font-semibold">
                      Report Library
                    </h2>

                    <p className="text-sm text-zinc-500">
                      Saved operational and financial reporting views.
                    </p>
                  </div>

                  <div className="overflow-hidden rounded-xl border border-white/10">
                    <table className="w-full text-left text-sm">
                      <thead className="sticky top-0 z-10 bg-[#111318] text-zinc-400 backdrop-blur">
                        <tr>
                          <th className="px-4 py-3 font-medium">Report</th>
                          <th className="px-4 py-3 font-medium">Type</th>
                          <th className="px-4 py-3 font-medium">Updated</th>
                          <th className="px-4 py-3 font-medium">Status</th>
                        </tr>
                      </thead>

                      <tbody>
                        {savedReports.map((report) => (
                          <tr
                            key={report.name}
                            className="border-t border-white/10 text-zinc-300 transition hover:bg-white/[0.03]"
                          >
                            <td className="px-4 py-4 font-medium text-white">
                              {report.name}
                            </td>

                            <td className="px-4 py-4 text-zinc-400">
                              {report.type}
                            </td>

                            <td className="px-4 py-4 text-zinc-400">
                              {report.updated}
                            </td>

                            <td className="px-4 py-4">
                              <StatusBadge status={report.status} />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  )
}