import { EnvelopeSimple, MapPin } from "@phosphor-icons/react/dist/ssr";
import { profile } from "@/data/profile";

export default function ContactPage() {
  const emailSubject = encodeURIComponent("वेबसाइट से संपर्क");
  const mailtoLink = `mailto:${profile.social.email}?subject=${emailSubject}`;

  return (
    <div className="section">
      <div className="container">
        <div className="text-center">
          <h1>संपर्क करें</h1>
          <p style={{ maxWidth: "600px", margin: "0 auto 3rem auto" }}>
            सामाजिक कार्य, संगठन, या किसी अन्य विषय पर चर्चा के लिए आप हमसे संपर्क कर सकते हैं।
          </p>
        </div>

        <div style={{ maxWidth: "600px", margin: "0 auto", backgroundColor: "#ffffff", padding: "3rem", borderRadius: "8px", boxShadow: "0 4px 20px rgba(0,0,0,0.05)", border: "1px solid var(--border)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
              <div style={{ padding: "1rem", backgroundColor: "var(--accent-light)", borderRadius: "50%", color: "var(--accent)" }}>
                <EnvelopeSimple size={24} weight="fill" />
              </div>
              <div>
                <h3 style={{ marginBottom: "0.25rem", fontSize: "1.1rem" }}>ईमेल</h3>
                <p style={{ margin: 0, color: "var(--text-secondary)" }}>
                  <a href={mailtoLink} style={{ color: "var(--text-primary)", fontWeight: "500", textDecoration: "underline" }}>
                    {profile.social.email}
                  </a>
                </p>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
              <div style={{ padding: "1rem", backgroundColor: "var(--surface)", borderRadius: "50%", color: "var(--text-secondary)" }}>
                <MapPin size={24} weight="fill" />
              </div>
              <div>
                <h3 style={{ marginBottom: "0.25rem", fontSize: "1.1rem" }}>स्थान</h3>
                <p style={{ margin: 0, color: "var(--text-secondary)" }}>
                  {profile.location.hi}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
