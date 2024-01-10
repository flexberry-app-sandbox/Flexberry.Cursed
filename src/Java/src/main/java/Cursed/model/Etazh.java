package Cursed.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Cursed.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Этаж
 */
@Entity(name = "IISCursedЭтаж")
@Table(schema = "public", name = "Этаж")
public class Etazh {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерЭтажа")
    private Integer номерэтажа;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Ryad")
    @Convert("Ryad")
    @Column(name = "Ряд", length = 16, unique = true, nullable = false)
    private UUID _ryadid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Ryad", insertable = false, updatable = false)
    private Ryad ryad;


    public Etazh() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерЭтажа() {
      return номерэтажа;
    }

    public void setНомерЭтажа(Integer номерэтажа) {
      this.номерэтажа = номерэтажа;
    }


}