import { ScrollView, Text, View, TouchableOpacity } from "react-native";

export default function Explore() {
  const skills = [
    { name: "TypeScript", level: 90, category: "Lenguaje" },
    { name: "React Native", level: 85, category: "Framework" },
    { name: "JavaScript", level: 95, category: "Lenguaje" },
    { name: "Base de Datos SQL", level: 80, category: "Base de Datos" },
    { name: "Git & GitHub", level: 88, category: "Control de Versiones" },
    { name: "UI/UX Design", level: 75, category: "Diseño" },
  ];

  const projects = [
    {
      title: "App de Gestión Académica",
      description: "Aplicación móvil para gestionar cursos y calificaciones",
      tech: "React Native, TypeScript",
      icon: "📱",
    },
    {
      title: "Sistema de Base de Datos",
      description: "Diseño e implementación de base de datos relacional",
      tech: "SQL, PostgreSQL",
      icon: "💾",
    },
    {
      title: "Plataforma Web de Aprendizaje",
      description: "Plataforma interactiva para cursos en línea",
      tech: "React, Node.js, MongoDB",
      icon: "🌐",
    },
    {
      title: "Algoritmos de Optimización",
      description: "Implementación de algoritmos avanzados y estructuras de datos",
      tech: "Python, JavaScript",
      icon: "🔧",
    },
  ];

  const categories = [
    { name: "Lenguajes", icon: "🔤", color: "#667eea" },
    { name: "Frameworks", icon: "🛠️", color: "#764ba2" },
    { name: "Bases de Datos", icon: "💾", color: "#f093fb" },
    { name: "Herramientas", icon: "⚙️", color: "#4facfe" },
  ];

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#F3F4F6",
      }}
      contentContainerStyle={{
        paddingVertical: 20,
        paddingHorizontal: 16,
      }}
    >
      {/* Header */}
      <View
        style={{
          backgroundColor: "#667eea",
          borderRadius: 16,
          padding: 24,
          marginBottom: 24,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 5,
        }}
      >
        <Text
          style={{
            fontSize: 28,
            fontWeight: "700",
            color: "#fff",
            marginBottom: 8,
          }}
        >
          Explora mis Skills 🚀
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: "rgba(255, 255, 255, 0.9)",
            lineHeight: 20,
          }}
        >
          Descubre mis habilidades técnicas, proyectos y especialidades en desarrollo de software
        </Text>
      </View>

      {/* Categories */}
      <Text
        style={{
          fontSize: 14,
          fontWeight: "700",
          color: "#6B7280",
          marginBottom: 12,
        }}
      >
        CATEGORÍAS
      </Text>

      <View style={{ flexDirection: "row", gap: 10, marginBottom: 24, flexWrap: "wrap" }}>
        {categories.map((cat, index) => (
          <TouchableOpacity
            key={index}
            style={{
              backgroundColor: "#fff",
              borderRadius: 12,
              padding: 12,
              width: "48%",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.08,
              shadowRadius: 4,
              elevation: 3,
              borderLeftWidth: 4,
              borderLeftColor: cat.color,
            }}
          >
            <Text style={{ fontSize: 20, marginBottom: 6 }}>{cat.icon}</Text>
            <Text
              style={{
                fontSize: 13,
                fontWeight: "600",
                color: "#111827",
              }}
            >
              {cat.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Technical Skills */}
      <Text
        style={{
          fontSize: 14,
          fontWeight: "700",
          color: "#6B7280",
          marginBottom: 12,
        }}
      >
        HABILIDADES TÉCNICAS
      </Text>

      {skills.map((skill, index) => (
        <View
          key={index}
          style={{
            backgroundColor: "#fff",
            borderRadius: 12,
            padding: 14,
            marginBottom: 10,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.08,
            shadowRadius: 4,
            elevation: 3,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 8,
            }}
          >
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "600",
                  color: "#111827",
                  marginBottom: 2,
                }}
              >
                {skill.name}
              </Text>
              <Text style={{ fontSize: 11, color: "#9CA3AF" }}>
                {skill.category}
              </Text>
            </View>
            <Text
              style={{
                fontSize: 13,
                fontWeight: "700",
                color: "#667eea",
              }}
            >
              {skill.level}%
            </Text>
          </View>
          <View
            style={{
              height: 6,
              backgroundColor: "#E5E7EB",
              borderRadius: 3,
              overflow: "hidden",
            }}
          >
            <View
              style={{
                height: "100%",
                width: `${skill.level}%`,
                backgroundColor: "#667eea",
              }}
            />
          </View>
        </View>
      ))}

      {/* Projects Section */}
      <Text
        style={{
          fontSize: 14,
          fontWeight: "700",
          color: "#6B7280",
          marginTop: 20,
          marginBottom: 12,
        }}
      >
        PROYECTOS DESTACADOS
      </Text>

      {projects.map((project, index) => (
        <TouchableOpacity
          key={index}
          style={{
            backgroundColor: "#fff",
            borderRadius: 12,
            padding: 16,
            marginBottom: 12,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.08,
            shadowRadius: 4,
            elevation: 3,
          }}
        >
          <View style={{ flexDirection: "row", marginBottom: 10 }}>
            <Text style={{ fontSize: 24, marginRight: 12 }}>{project.icon}</Text>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "700",
                  color: "#111827",
                  marginBottom: 4,
                }}
              >
                {project.title}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: "#667eea",
                  fontWeight: "600",
                }}
              >
                {project.tech}
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontSize: 13,
              color: "#6B7280",
              lineHeight: 18,
            }}
          >
            {project.description}
          </Text>
          <View
            style={{
              marginTop: 10,
              paddingTop: 10,
              borderTopWidth: 1,
              borderTopColor: "#E5E7EB",
              alignItems: "flex-end",
            }}
          >
            <Text
              style={{
                fontSize: 12,
                color: "#667eea",
                fontWeight: "600",
              }}
            >
              Ver detalles →
            </Text>
          </View>
        </TouchableOpacity>
      ))}

      {/* Footer CTA */}
      <TouchableOpacity
        style={{
          backgroundColor: "#667eea",
          borderRadius: 12,
          padding: 16,
          marginTop: 20,
          marginBottom: 20,
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 8,
          elevation: 5,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "700",
            color: "#fff",
          }}
        >
          📧 Contáctame
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: "rgba(255, 255, 255, 0.9)",
            marginTop: 4,
          }}
        >
          heriiolmedo@gmail.com
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
