"use client"

import { useState } from "react"

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

import {
  Activity,
  CalendarDays,
  DollarSign,
  FileText,
  TrendingUp,
  Users,
  MoreHorizontal,
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

const serviceData = [
  { service: "Delivery", jobs: 32 },
  { service: "Pickup", jobs: 18 },
  { service: "Bulk Sand", jobs: 24 },
  { service: "Gravel", jobs: 29 },
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

/* =========================================================
   REUSABLE COMPONENTS
========================================================= */

function KpiCard({
  title,
  value,
  detail,
  icon: Icon,
}: {
  title: string
  value: string
  detail: string
  icon: React.ElementType
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-lg transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]">
      <div className="flex items-center justify-between">
        <p className="text-sm text-zinc-400">{title}</p>
        <Icon className="h-5 w-5 text-zinc-500" />
      </div>

      <p className="mt-4 text-3xl font-semibold tracking-tight text-white">
        {value}
      </p>

      <p className="mt-2 text-sm text-zinc-500">{detail}</p>
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
                className={`w-full rounded-xl px-4 py-3 text-left transition ${
                  activeScreen === item
                    ? "bg-white text-black"
                    : "text-zinc-400 hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <p className="text-sm font-medium text-white">Demo Environment</p>

            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Sample data shown for a bulk materials and service business.
            </p>
          </div>
        </aside>

        {/* =========================
            MAIN CONTENT
        ========================== */}

        <section className="mx-auto w-full max-w-7xl px-6 py-8">
          {/* =========================
              TOP UTILITY BAR
          ========================== */}

          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
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

          {/* =====================================================
              OVERVIEW SCREEN
          ====================================================== */}

          {activeScreen === "Overview" && (
            <>
              <div className="flex flex-col gap-4 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                    Auxilium Demo
                  </p>

                  <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
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

              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <KpiCard
                  title="Revenue"
                  value="$158.2K"
                  detail="+18.4% from previous period"
                  icon={DollarSign}
                />

                <KpiCard
                  title="Quotes Sent"
                  value="186"
                  detail="42 awaiting customer response"
                  icon={FileText}
                />

                <KpiCard
                  title="Conversion Rate"
                  value="64%"
                  detail="Approved quote ratio"
                  icon={TrendingUp}
                />

                <KpiCard
                  title="Active Customers"
                  value="73"
                  detail="Across residential and commercial"
                  icon={Users}
                />
              </div>

              <div className="mt-6 grid gap-6 xl:grid-cols-[2fr_1fr]">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-lg transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-semibold">Revenue Trend</h2>
                      <p className="text-sm text-zinc-500">
                        Monthly quoted and approved revenue
                      </p>
                    </div>

                    <Activity className="h-5 w-5 text-zinc-500" />
                  </div>

                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={revenueData}>
                        <XAxis dataKey="month" stroke="#71717a" />
                        <YAxis stroke="#71717a" />
                        <Tooltip />
                        <Line
                          type="monotone"
                          dataKey="revenue"
                          stroke="#e5e7eb"
                          strokeWidth={3}
                          dot={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-lg transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-semibold">Job Mix</h2>
                      <p className="text-sm text-zinc-500">
                        Volume by service type
                      </p>
                    </div>

                    <CalendarDays className="h-5 w-5 text-zinc-500" />
                  </div>

                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={serviceData}>
                        <XAxis dataKey="service" stroke="#71717a" />
                        <YAxis stroke="#71717a" />
                        <Tooltip />
                        <Bar
                          dataKey="jobs"
                          fill="#e5e7eb"
                          radius={[8, 8, 0, 0]}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-3">
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
                    <thead className="bg-white/[0.04] text-zinc-400">
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
                          className="border-t border-white/10 text-zinc-300"
                        >
                          <td className="px-4 py-4">{quote.customer}</td>
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
                <table className="w-full text-left text-sm">
                  <thead className="bg-white/[0.04] text-zinc-400">
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
                        className="border-t border-white/10 text-zinc-300 transition hover:bg-white/[0.03]"
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
                <table className="w-full text-left text-sm">
                  <thead className="bg-white/[0.04] text-zinc-400">
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
              {/* =========================
                  CUSTOMER DETAIL DRAWER
              ========================== */}

              {selectedCustomer && (
                <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm">

                  {/* Drawer Panel */}
                  <div className="h-full w-full max-w-xl overflow-y-auto border-l border-white/10 bg-[#0d0f14] p-8 shadow-2xl">

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
        </section>
      </div>
    </main>
  )
}