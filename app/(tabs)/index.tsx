import { ScrollView, Text, View } from "react-native";

export default function Index() {
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
          ¡Bienvenida! 👋
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "rgba(255, 255, 255, 0.95)",
            lineHeight: 24,
          }}
        >
          Hérika Alexandra Olmedo Aguilera
        </Text>
        <Text
          style={{
            fontSize: 13,
            color: "rgba(255, 255, 255, 0.8)",
            marginTop: 8,
          }}
        >
          Estudiante de Ingeniería en Informática
        </Text>
      </View>
      <Text
        style={{
          fontSize: 14,
          fontWeight: "700",
          color: "#6B7280",
          marginBottom: 12,
        }}
      >
        RESUMEN
      </Text>

      <View style={{ flexDirection: "row", gap: 12, marginBottom: 24 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            borderRadius: 12,
            padding: 16,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.08,
            shadowRadius: 4,
            elevation: 3,
          }}
        >
          <Text style={{ fontSize: 12, color: "#9CA3AF", fontWeight: "600" }}>
            Semestre Actual
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "700",
              color: "#667eea",
              marginTop: 8,
            }}
          >
            8vo
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            borderRadius: 12,
            padding: 16,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.08,
            shadowRadius: 4,
            elevation: 3,
          }}
        >
          <Text style={{ fontSize: 12, color: "#9CA3AF", fontWeight: "600" }}>
            Promedio
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "700",
              color: "#22C55E",
              marginTop: 8,
            }}
          >
            3.5
          </Text>
        </View>
      </View>
      <Text
        style={{
          fontSize: 14,
          fontWeight: "700",
          color: "#6B7280",
          marginBottom: 12,
        }}
      >
        CURSOS ACTUALES
      </Text>

      {[
        { name: "Taller de SO - Linux", progress: 85, icon: "💾" },
        { name: "Calidad de Software", progress: 90, icon: "🌐" },
        { name: "Desarrollo de Apps Avanzado", progress: 75, icon: "⚙️" },
        { name: "Estadistica descriptiva", progress: 80, icon: "📊" },
      ].map((course, index) => (
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
            <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
              <Text style={{ fontSize: 20, marginRight: 10 }}>{course.icon}</Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "600",
                  color: "#111827",
                  flex: 1,
                }}
              >
                {course.name}
              </Text>
            </View>
            <Text
              style={{
                fontSize: 13,
                fontWeight: "700",
                color: "#667eea",
              }}
            >
              {course.progress}%
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
                width: `${course.progress}%`,
                backgroundColor: "#667eea",
              }}
            />
          </View>
        </View>
      ))}
      <Text
        style={{
          fontSize: 14,
          fontWeight: "700",
          color: "#6B7280",
          marginTop: 20,
          marginBottom: 12,
        }}
      >
        PRÓXIMAS ACTIVIDADES
      </Text>

      {[
        { title: "Examen de Base de Datos", date: "28 Nov", icon: "📝" },
        { title: "Proyecto de Desarrollo Web", date: "5 Dic", icon: "🚀" },
        { title: "Presentación de Software", date: "12 Dic", icon: "📢" },
      ].map((activity, index) => (
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
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, marginRight: 12 }}>{activity.icon}</Text>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "600",
                color: "#111827",
                marginBottom: 4,
              }}
            >
              {activity.title}
            </Text>
            <Text style={{ fontSize: 12, color: "#9CA3AF" }}>
              {activity.date}
            </Text>
          </View>
          <View
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: "#667eea",
            }}
          />
        </View>
      ))}
      <View
        style={{
          marginTop: 24,
          paddingTop: 16,
          borderTopWidth: 1,
          borderTopColor: "#E5E7EB",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 12, color: "#9CA3AF" }}>
          📱 Mi Perfil Académico
        </Text>
        <Text style={{ fontSize: 12, color: "#D1D5DB", marginTop: 8 }}>
          Última actualización: hoy
        </Text>
      </View>
    </ScrollView>
  );
}
