// =====================
// COORDINATES
// =====================
interface Coordinates {
    lat: number;
    lon: number;
}

// =====================
// TRANSIT INFO
// =====================
interface TransitInfo {
    from: string;
    to: string;
    method: "caminar" | "metro" | "tren" | "autobús" | "taxi";
    line_or_route: string;
    from_station: string;
    to_station: string;
    estimated_time_minutes: number;
    estimated_cost_jpy: number | null;
}

// =====================
// ACTIVITY
// =====================
interface Activity {
    name: string;
    type: "templo" | "museo" | "parque" | "restaurante" | "zona comercial" | "actividad";
    address: string;
    coordinates: Coordinates;
    google_maps_url: string;
    visit_duration_minutes: number;
    entrance_fee_jpy: number | null;
    notes: string;
    transit_from_previous: TransitInfo;
}

// =====================
// SEGMENT
// =====================
interface Segment {
    period: "mañana" | "tarde" | "noche";
    activities: Activity[];
}

// =====================
// DAILY ITINERARY ITEM
// =====================
interface DailyItineraryItem {
    day: number; // 1..7
    city: string;
    summary: string;
    segments: Segment[];
    alternatives_for_bad_weather: string[];
    end_of_day_notes: string;
}

// =====================
// INTERCITY TRAVEL
// =====================
interface IntercityTravel {
    from_city: string;
    to_city: string;
    recommended_option: "shinkansen" | "tren expreso" | "autobús";
    departure_station: string;
    arrival_station: string;
    estimated_duration_minutes: number;
    estimated_cost_jpy: number;
    booking_note: string;
}

// =====================
// LODGING
// =====================
interface LodgingArea {
    area_name: string;
    why: string;
    price_range_per_night_jpy: string;
}

interface LodgingRecommendation {
    city: string;
    recommended_areas: LodgingArea[];
}

// =====================
// BUDGET BREAKDOWN
// =====================
interface BudgetBreakdown {
    total_jpy: number;
    per_category: {
        accommodation: number;
        intercity_transport: number;
        local_transport: number;
        meals: number;
        activities_and_entrances: number;
        misc: number;
    };
    notes: string;
}

// =====================
// OVERVIEW
// =====================
interface Overview {
    trip_length_days: number;
    cities: string[];
    total_estimated_budget_jpy: number;
    currency: string;
}

// =====================
// ROOT OBJECT
// =====================
export interface ItineraryOutput {
    overview: Overview;
    daily_itinerary: DailyItineraryItem[];
    intercity_travel: IntercityTravel[];
    lodging_recommendations: LodgingRecommendation[];
    budget_breakdown: BudgetBreakdown;
    logistics_tips: string;
    verification_warnings: string[];
}
